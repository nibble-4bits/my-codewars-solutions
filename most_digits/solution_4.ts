export class Kata {
  static findLongest(array: number[]): number {
    return array.reduce((acc, x) => acc.toString().length < x.toString().length ? x : acc, array[0]);
  }
}