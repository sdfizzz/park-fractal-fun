import React, { useEffect, useState } from 'react';
import { Stage } from '@inlet/react-pixi';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../store/StoreContext';
import { BranchProps } from './types';
import { ConfigProps } from '../../store/config/types';
import { calculateBranch } from '../../store/config/helper';
import colorCalculator from './ColorCalculator';
import FractalBranch from './FractalBranch';
import FractalText from './FractalText';

const getBranches = (head: BranchProps, conf: ConfigProps): Array<BranchProps> => {
  const { angle, branchCount, branchLenCoef } = conf;
  const { thickness, deep } = head;

  const branchesDeep = deep + 1;
  const childThickness = thickness * 0.9;
  const len = head.direction.length * branchLenCoef;
  const color = colorCalculator(branchesDeep, conf);

  const branchProps = new Array<BranchProps>();

  let stepAngle = angle / (branchCount - 1);
  let angleCounter = branchCount % 2 === 0 ? stepAngle / 2 : 0;

  for (let k = 0; k < Math.ceil(branchCount / 2); k += 1, angleCounter += stepAngle) {
    branchProps.push(
      calculateBranch({
        start: head.end,
        angle: head.direction.angle + angleCounter,
        deep: branchesDeep,
        len,
        thickness: childThickness,
        color,
      })
    );

    if (angleCounter !== 0) {
      branchProps.push(
        calculateBranch({
          start: head.end,
          angle: head.direction.angle - angleCounter,
          deep: branchesDeep,
          len,
          thickness: childThickness,
          color,
        })
      );
    }
  }

  return branchProps;
};

async function getFractalSet(
  screen: { w: number; h: number },
  branch: { w: number; h: number },
  conf: ConfigProps
) {
  let x = screen.w / 2;
  let y = (screen.h * 3) / 4;
  const { deep, stroke } = conf;

  const result = new Array<BranchProps>(
    calculateBranch({
      start: { x, y },
      end: { x, y: y - branch.h },
      deep: 0,
      thickness: stroke,
      color: colorCalculator(0, conf),
    })
  );
  let lastBranch: Array<BranchProps> = [...result];

  // TODO refact with async functions
  for (let i = 1; i < deep; i += 1) {
    const newBranch: BranchProps[] = [];
    lastBranch.map((v) => getBranches(v, conf)).forEach((r) => newBranch.push(...r));
    lastBranch = newBranch;
    result.unshift(...newBranch);
  }

  return [...result];
}

const FractalCanvas = observer<{ className?: string }, Stage>(
  (props, ref) => {
    const { screen, branch, config, text, svg } = useStore();
    const [fractalSet, setFractalSet] = useState<Array<BranchProps>>([]);

    const onBranchClick = (val: BranchProps) => {
      // eslint-disable-next-line no-console
      console.log(val);
    };

    useEffect(() => {
      let isCanceled = false;

      const genFunc = getFractalSet(
        { w: screen.width, h: screen.height },
        { w: branch.width, h: branch.defaultLen },
        config
      ).then((set) => {
        if (!isCanceled) setFractalSet(set);
      });

      (async () => {
        if (isCanceled) return;
        await genFunc;
      })();

      return () => {
        isCanceled = true;
      };
    }, [config, screen, branch]);

    const svgSrc = svg.src;
    const usedText = svgSrc ? svg.symbol : text.current;
    const branches = !svgSrc && !usedText;

    return (
      <Stage
        width={screen.width}
        height={screen.height}
        options={{ antialias: true, autoDensity: true, backgroundAlpha: 0 }}
        ref={ref}
        className={props.className}
      >
        {!!usedText &&
          fractalSet.map((item) => (
            <FractalText key={Math.random()} item={item} text={usedText} onClick={onBranchClick} />
          ))}
        {branches &&
          fractalSet.map((item) => (
            <FractalBranch key={Math.random()} item={item} onClick={onBranchClick} />
          ))}
      </Stage>
    );
  },
  { forwardRef: true }
);

export default FractalCanvas;
