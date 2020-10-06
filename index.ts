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

  length = 2711;
}
