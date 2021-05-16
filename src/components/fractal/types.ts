interface RectangleProps {
  x: number;
  y: number;
  width: number;
  height: number;
  color: number;
}

type BranchProps = {
  start: { x: number; y: number };
  end: { x: number; y: number };
  direction: Direction;
  deep: number;
  color: number;
  thickness: number;
};

type Point = {
  x: number;
  y: number;
};

class Direction {
  dx = 0;
  dy = 0;

  constructor(dx: number = 0, dy: number = 0) {
    this.dx = dx;
    this.dy = dy;
  }

  get angle() {
    return this.dx !== 0 ? Math.asin(this.dy / this.dx) : 0;
  }

  get length() {
    return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
  }

  multiply(k: number) {
    this.dx *= k;
    this.dy *= k;

    return this;
  }
}

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

  if (end !== undefined) {
    const direction = new Direction(end.x - start.x, end.y - start.y);
    return {
      start,
      end,
      direction,
      deep,
      color,
      thickness,
    };
  }

  if (angle !== undefined && len !== undefined) {
    const direction = new Direction(Math.sin(angle), Math.cos(angle)).multiply(len);
    const endByDirection = {
      x: start.x + direction.dx,
      y: start.y + direction.dy,
    };

    return {
      start,
      end: endByDirection,
      direction,
      deep,
      color,
      thickness,
    };
  }

  return {
    start,
    end: { x: 100, y: 100 },
    deep,
    direction: new Direction(),
    color,
    thickness,
  };
}

export type { RectangleProps, BranchProps };
export { calculateBranch };
