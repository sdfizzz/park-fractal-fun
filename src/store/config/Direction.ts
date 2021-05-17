class Direction {
  dx = 0;
  dy = 0;
  readonly #angle: number = 0;

  constructor(dx: number = 0, dy: number = 0) {
    this.dx = dx;
    this.dy = dy;

    if (dx !== 0 || dy !== 0) {
      let tan = dy / dx;
      if (isFinite(tan)) {
        this.#angle = Math.atan(tan);
        if ((tan > 0 && dx < 0) || (tan < 0 && dy > 0)) {
          this.#angle += Math.PI;
        }
      } else {
        this.#angle = (Math.PI / 2) * Math.sign(dy);
      }
    }
  }

  get angle() {
    return this.#angle;
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

export default Direction;
