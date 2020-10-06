export class Bavli {
  constructor(pageIndex: number = 0) {
    this.pageIndex = pageIndex;
  }

  private _pageIndex: number = 0;

  set pageIndex(value: number) {
    let result = value % this.length;
    if (result < 0) { result += this.length; }
    this._pageIndex = result;
  }

  get pageIndex(): number {
    return this._pageIndex;
  }

  get masekhet(): number {
    let masekhet = 0;
    let counter = 0;

    while (counter <= this.pageIndex) {
      counter += this.lengths[masekhet];
      masekhet += 1;
    }

    return masekhet - 1;
  }

  // eslint-disable-next-line max-len
  private lengths = [63, 156, 104, 120, 21, 34, 87, 55, 39, 30, 31, 28, 26, 121, 111, 90, 65, 48, 89, 81, 118, 118, 175, 112, 23, 48, 75, 13, 119, 109, 141, 60, 33, 33, 27, 20, 3, 4, 9, 72];

  length = this.lengths.reduce((prev, curr) => prev + curr, 0);
}
