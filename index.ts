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

  private get page(): { masekhet: number, pageIndex: number } {
    let masekhet = 0;
    let pagesLeft = this.globalIndex;

    do {
      if (pagesLeft < this.lengths[masekhet]) { return { masekhet, pageIndex: pagesLeft }; }
      pagesLeft -= this.lengths[masekhet];
      masekhet += 1;
    } while (true); // eslint-disable-line no-constant-condition
  }

  get masekhet(): number {
    return this.page.masekhet;
  }

  get pageIndex(): number {
    return this.page.pageIndex;
  }

  get pageNumber(): number {
    const { masekhet, pageIndex } = this.page;
    const start = this.starts[masekhet];
    return pageIndex + start;
  }

  /* eslint-disable max-len */
  private lengths = [63, 156, 104, 120, 21, 87, 55, 39, 34, 30, 31, 28, 26, 121, 111, 90, 65, 48, 89, 81, 118, 118, 175, 112, 23, 48, 75, 13, 119, 109, 141, 60, 33, 33, 27, 20, 4, 9, 3, 72];

  private starts = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 22, 25, 34, 2];
  /* eslint-enable max-len */

  length = this.lengths.reduce((prev, curr) => prev + curr, 0);
}
