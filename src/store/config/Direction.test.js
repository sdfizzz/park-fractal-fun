import Direction from './Direction';

test('Check angles', () => {
  const step = (15 * Math.PI) / 180; // each 15 degree
  for (let angle = 0; angle < Math.PI * 2; angle += step) {
    const direction = new Direction(Math.cos(angle), Math.sin(angle));
    expect((direction.angle + 2 * Math.PI) % (2 * Math.PI)).toBeCloseTo(angle % (2 * Math.PI));
  }
});
