import { Bavli } from '.';

test('should length equal 2711', () => {
  // Arrange
  const bavli = new Bavli();
  // Act
  const actual = bavli.length;
  // Assert
  expect(actual).toBe(2711);
});

describe('new (index)', () => {
  test('should set the current index', () => {
    // Arrange
    const bavli = new Bavli(42);
    // Act
    const actual = bavli.globalIndex;
    // Assert
    expect(actual).toBe(42);
  });
});

describe('globalIndex property', () => {
  test('should works with negative numbers', () => {
    // Arrange
    const bavli = new Bavli(-2);
    // Act
    const actual = bavli.globalIndex;
    // Assert
    expect(actual).toBe(2709);
  });

  test('should works with large numbers', () => {
    // Arrange
    const bavli = new Bavli(27110042);
    // Act
    const actual = bavli.globalIndex;
    // Assert
    expect(actual).toBe(42);
  });

  test('should works with large negative numbers', () => {
    // Arrange
    const bavli = new Bavli(-2711001);
    // Act
    const actual = bavli.globalIndex;
    // Assert
    expect(actual).toBe(2710);
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

  test('should works 1.333', () => {
    // Arrange
    const bavli = new Bavli(62);
    // Act
    const actual = bavli.masekhet;
    // Assert
    expect(actual).toBe(0);
  });

  test('should works 1.666', () => {
    // Arrange
    const bavli = new Bavli(63);
    // Act
    const actual = bavli.masekhet;
    // Assert
    expect(actual).toBe(1);
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

describe('pageIndex property', () => {
  test('should works 1', () => {
    // Arrange
    const bavli = new Bavli(0);
    // Act
    const actual = bavli.pageIndex;
    // Assert
    expect(actual).toBe(0);
  });

  test('should works 2', () => {
    // Arrange
    const bavli = new Bavli(62);
    // Act
    const actual = bavli.pageIndex;
    // Assert
    expect(actual).toBe(62);
  });

  test('should works 3', () => {
    // Arrange
    const bavli = new Bavli(63);
    // Act
    const actual = bavli.pageIndex;
    // Assert
    expect(actual).toBe(0);
  });

  test('should works 4', () => {
    // Arrange
    const bavli = new Bavli(-1);
    // Act
    const actual = bavli.pageIndex;
    // Assert
    expect(actual).toBe(71);
  });
});
