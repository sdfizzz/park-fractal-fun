import React from 'react';
import { Stage } from '@inlet/react-pixi';
import { observer } from 'mobx-react-lite';

import FractalBranch from './FractalBranch';
import { useStore } from '../../store/StoreContext';
import { BranchProps } from './types';
import { ConfigProps } from '../../store/config/types';
import { calculateBranch } from '../../store/config/helper';
import FractalText from './FractalText';
import colorCalculator from './ColorCalculator';

const getBranches = (head: BranchProps, conf: ConfigProps): Array<BranchProps> => {
  const { angle, branchCount, branchLenCoef } = conf;
  const { thickness, deep } = head;

  const branchesDeep = deep + 1;
  const childThickness = thickness * 0.9;
  const len = head.direction.length * branchLenCoef;
  const color = colorCalculator(branchesDeep, conf);

  const result = new Array<BranchProps>();

  let stepAngle = angle / (branchCount - 1);
  let angleCounter = branchCount % 2 === 0 ? stepAngle / 2 : 0;

  for (let k = 0; k < Math.ceil(branchCount / 2); k += 1, angleCounter += stepAngle) {
    result.push(
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
      result.push(
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

  return result;
};

const getFractalSet = (
  screen: { w: number; h: number },
  branch: { w: number; h: number },
  conf: ConfigProps
): Array<BranchProps> => {
  let x = screen.w / 2;
  let y = 0;
  let height = branch.h;

  const firstBranch = calculateBranch({
    start: { x, y },
    end: { x, y: height },
    deep: 0,
    thickness: conf.stroke,
    color: colorCalculator(0, conf),
  });
  const result = new Array<BranchProps>(firstBranch);

  let lastBranch = result;

  for (let i = 1; i < conf.deep; i += 1) {
    lastBranch = lastBranch.map((v) => getBranches(v, conf)).flat();
    result.push(...lastBranch);
  }
  return result;
};

const FractalCanvas = observer(() => {
  const { screen, branch, config, text } = useStore();

  const onBranchClick = (val: BranchProps) => {
    // eslint-disable-next-line no-console
    console.log(val);
  };

  const fractalSet = getFractalSet(
    { w: screen.width, h: screen.height },
    { w: branch.width, h: branch.defaultLen },
    config
  );

  const usedText = text.current;

  return (
    <Stage
      width={screen.width}
      height={screen.height}
      options={{ antialias: true, autoDensity: true, backgroundAlpha: 0 }}
    >
      {usedText
        ? fractalSet.map((item) => (
            <FractalText key={Math.random()} item={item} text={usedText} onClick={onBranchClick} />
          ))
        : fractalSet.map((item) => (
            <FractalBranch key={Math.random()} item={item} onClick={onBranchClick} />
          ))}
    </Stage>
  );
});

export default FractalCanvas;
