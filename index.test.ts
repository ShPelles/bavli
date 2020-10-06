import { Bavli } from '.';

test('should length equal 2711', () => {
  const bavli = new Bavli();
  expect(bavli.length).toBe(2711);
});

describe('new (index)', () => {
  test('should set the current index', () => {
    const bavli = new Bavli(42);
    expect(bavli.pageIndex).toBe(42);
  });
});
