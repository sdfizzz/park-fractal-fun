import Direction from '../../store/config/Direction';

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

export type { Point, RectangleProps, BranchProps };
