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

const getBranchesAsync = async (
  head: BranchProps,
  conf: ConfigProps
): Promise<Array<BranchProps>> => {
  const { angle, branchCount, branchLenCoef } = conf;
  const { thickness, deep } = head;

  const branchesDeep = deep + 1;
  const childThickness = thickness * 0.9;
  const len = head.direction.length * branchLenCoef;
  const color = colorCalculator(branchesDeep, conf);

  const promises = new Array<Promise<BranchProps>>();

  let stepAngle = angle / (branchCount - 1);
  let angleCounter = branchCount % 2 === 0 ? stepAngle / 2 : 0;

  for (let k = 0; k < Math.ceil(branchCount / 2); k += 1, angleCounter += stepAngle) {
    promises.push(
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
      promises.push(
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

  return Promise.all(promises);
};

const getFractalSet = async (
  screen: { w: number; h: number },
  branch: { w: number; h: number },
  conf: ConfigProps
): Promise<BranchProps[]> => {
  let x = screen.w / 2;
  let y = (screen.h * 3) / 4;

  const firstBranch = await calculateBranch({
    start: { x, y },
    end: { x, y: y - branch.h },
    deep: 0,
    thickness: conf.stroke,
    color: colorCalculator(0, conf),
  });
  const result = new Array<BranchProps>(firstBranch);

  let lastBranch = result;

  for (let i = 1; i < conf.deep; i += 1) {
    const promises: Promise<Array<BranchProps>>[] = lastBranch.map((v) =>
      getBranchesAsync(v, conf)
    );
    // eslint-disable-next-line no-await-in-loop
    lastBranch = await Promise.all(promises).then((arr) => arr.flat());
    result.unshift(...lastBranch);
  }
  return result;
};

const FractalCanvas = observer<{ className?: string }, Stage>(
  (props, ref) => {
    const { screen, branch, config, text, svg } = useStore();
    const [fractalSet, setFractalSet] = useState<Array<BranchProps>>([]);

    const onBranchClick = (val: BranchProps) => {
      // eslint-disable-next-line no-console
      console.log(val);
    };

    useEffect(() => {
      const ret: { promise?: Promise<Array<BranchProps>>; cancel?: () => void } = {};
      const signal = new Promise((resolve, reject) => {
        ret.cancel = () => {
          reject(new Error('Calc branches cancelled'));
        };
      });

      ret.promise = new Promise<Array<BranchProps>>((resolve, reject) => {
        signal.catch((err) => {
          reject(err);
        });

        getFractalSet(
          { w: screen.width, h: screen.height },
          { w: branch.width, h: branch.defaultLen },
          config
        ).then((r) => resolve(r));
      });

      ret.promise
        .then((set) => {
          setFractalSet(set);
        })
        .catch(() => {});

      return () => {
        if (ret.cancel) ret.cancel();
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
