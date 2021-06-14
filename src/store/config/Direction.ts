class Direction {
  dx;
  dy;
  readonly #angle;

  constructor(dx: number = 0, dy: number = 0) {
    let angle = 0;
    if (dx === 0 && dy !== 0) {
      angle = (Math.PI / 2) * Math.sign(dy);
    } else if (dx !== 0 && dy === 0) {
      angle = dx < 0 ? Math.PI : 0;
    } else if (dx !== 0 || dy !== 0) {
      let tan = dy / dx;
      if (isFinite(tan)) {
        angle = Math.atan(tan);
        if ((tan > 0 && dx < 0) || (tan < 0 && dy > 0)) {
          angle += Math.PI;
        }
      } else {
        angle = (Math.PI / 2) * Math.sign(dy);
      }
    }

    this.dx = dx;
    this.dy = dy;
    this.#angle = angle;
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
