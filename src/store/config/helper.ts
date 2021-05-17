import Direction from './Direction';
import { BranchProps, Point } from '../../components/fractal/types';

function calculateBranch(options: {
  start: Point;
  end?: Point;
  angle?: number;
  len?: number;
  deep: number;
  color?: number;
  thickness: number;
}): BranchProps {
  const { start, end, angle, deep, len, thickness, color = 0x000000 } = options;
  let result: BranchProps = {
    start,
    end: start,
    deep,
    direction: new Direction(),
    color,
    thickness,
  };

  if (end !== undefined) {
    const direction = new Direction(end.x - start.x, end.y - start.y);
    result = {
      start,
      end,
      direction,
      deep,
      color,
      thickness,
    };
  }

  if (angle !== undefined) {
    const norm = new Direction(Math.cos(angle), Math.sin(angle));
    const direction = len !== undefined ? norm.multiply(len) : norm;

    const endByDirection = {
      x: start.x + direction.dx,
      y: start.y + direction.dy,
    };

    result = {
      start,
      end: endByDirection,
      direction,
      deep,
      color,
      thickness,
    };
  }

  return result;
}

// eslint-disable-next-line import/prefer-default-export
export { calculateBranch };
