export class Bavli {
  constructor(public pageIndex: number = 0) {
    if (pageIndex < 0) {
      this.pageIndex += this.length;
    }
  }

  length = 2711;
}
