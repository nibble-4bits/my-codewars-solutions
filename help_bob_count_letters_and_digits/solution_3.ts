export function countLettersAndDigits(input: string): number {
  return input.replace(/[^0-9a-z]/gi, '').length;
}