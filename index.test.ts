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

describe('pageIndex property', () => {
  test('should works with negative numbers', () => {
    const bavli = new Bavli(-2);
    expect(bavli.pageIndex).toBe(2709);
  });

  test('should works with large numbers', () => {
    const bavli = new Bavli(27110042);
    expect(bavli.pageIndex).toBe(42);
  });

  test('should works with large negative numbers', () => {
    const bavli = new Bavli(-2711001);
    expect(bavli.pageIndex).toBe(2710);
  });
});

describe('masekhet property', () => {
  test('should works 1', () => {
    // Arrange
    const bavli = new Bavli(0);
    // Act
    const actual = bavli.masekhet;
    // Assert
    expect(actual).toBe(0);
  });

  test('should works 2', () => {
    // Arrange
    const bavli = new Bavli(100);
    // Act
    const actual = bavli.masekhet;
    // Assert
    expect(actual).toBe(1);
  });

  test('should works 3', () => {
    // Arrange
    const bavli = new Bavli(300);
    // Act
    const actual = bavli.masekhet;
    // Assert
    expect(actual).toBe(2);
  });

  test('should works 4', () => {
    // Arrange
    const bavli = new Bavli(-1);
    // Act
    const actual = bavli.masekhet;
    // Assert
    expect(actual).toBe(39);
  });
});
