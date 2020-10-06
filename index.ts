export class Bavli {
  constructor(globalIndex: number = 0) {
    this.globalIndex = globalIndex;
  }

  private _globalIndex: number = 0;

  set globalIndex(value: number) {
    let result = value % this.length;
    if (result < 0) { result += this.length; }
    this._globalIndex = result;
  }

  get globalIndex(): number {
    return this._globalIndex;
  }

  get masekhet(): number {
    let masekhet = 0;
    let counter = 0;

    do {
      counter += this.lengths[masekhet];
      masekhet += 1;
    } while (counter < this.globalIndex);

    return masekhet - 1;
  }

  get pageIndex(): number {
    let masekhet = 0;
    let pagesLeft = this.globalIndex;

    do {
      if (pagesLeft < this.lengths[masekhet]) { return pagesLeft; }
      pagesLeft -= this.lengths[masekhet];
      masekhet += 1;
    } while (true); // eslint-disable-line no-constant-condition
  }

  // eslint-disable-next-line max-len
  private lengths = [63, 156, 104, 120, 21, 34, 87, 55, 39, 30, 31, 28, 26, 121, 111, 90, 65, 48, 89, 81, 118, 118, 175, 112, 23, 48, 75, 13, 119, 109, 141, 60, 33, 33, 27, 20, 3, 4, 9, 72];

  length = this.lengths.reduce((prev, curr) => prev + curr, 0);
}
