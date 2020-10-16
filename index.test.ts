import { Bavli } from '.';

test('should length equal 2711', () => {
  // Arrange
  const bavli = new Bavli();
  // Act
  const actual = bavli.length;
  // Assert
  expect(actual).toBe(2711);
});

describe('globalIndex property', () => {
  test.each`
  param         | expected    | description
  ${42}         | ${42}       | ${'simple test'}
  ${-2}         | ${2709}     | ${'negative number'}
  ${27110042}   | ${42}       | ${'large numbers'}
  ${-2711001}   | ${2710}     | ${'large negative numbers'}
`('should new Bavli($param).globalIndex equles $expected ($description)', ({ param, expected }) => {
    // Arrange
    const bavli = new Bavli(param);
    // Act
    const actual = bavli.globalIndex;
    // Assert
    expect(actual).toBe(expected);
  });
});

describe('masekhet property', () => {
  test.each`
  param   | expected    | description
  ${0}    | ${0}        | ${'simple test'}
  ${100}  | ${1}        | ${'simple test'}
  ${300}  | ${2}        | ${'simple test'}
  ${-1}   | ${39}       | ${'the last page'}
  ${62}   | ${0}        | ${'last "Berakhot" page'}
  ${63}   | ${1}        | ${'first "Shabbat" page'}
`('should new Bavli($param).masekhet equles $expected ($description)', ({ param, expected }) => {
    // Arrange
    const bavli = new Bavli(param);
    // Act
    const actual = bavli.masekhet;
    // Assert
    expect(actual).toBe(expected);
  });
});

describe('pageIndex property', () => {
  test.each`
  param   | expected    | description
  ${0}    | ${0}        | ${'simple test'}
  ${100}  | ${37}       | ${'simple test'}
  ${62}   | ${62}       | ${'last "Berakhot" page'}
  ${63}   | ${0}        | ${'first "Shabbat" page'}
  ${-1}   | ${71}       | ${'the last page'}
`('should new Bavli($param).pageIndex equles $expected ($description)', ({ param, expected }) => {
    // Arrange
    const bavli = new Bavli(param);
    // Act
    const actual = bavli.pageIndex;
    // Assert
    expect(actual).toBe(expected);
  });
});

describe('pageNumber property', () => {
  test.each`
  param   | expected    | description
  ${0}    | ${2}        | ${'simple test'}
  ${62}   | ${64}       | ${'last "Berakhot" page'}
  ${63}   | ${2}        | ${'first "Shabbat" page'}
  ${-1}   | ${73}       | ${'the last page'}
  ${2634} | ${34}       | ${'first "Middot" page'}
  ${2638} | ${37}       | ${'last "Middot" page'}
`('should new Bavli($param).pageNumber equles $expected ($description)', ({ param, expected }) => {
    // Arrange
    const bavli = new Bavli(param);
    // Act
    const actual = bavli.pageNumber;
    // Assert
    expect(actual).toBe(expected);
  });
});
