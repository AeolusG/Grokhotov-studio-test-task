export const declineNoun = (number: number, words: Array<any>) => {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    console.log(words?.[2]);
    return words?.[2];
  }
  n %= 10;
  if (n === 1) {
    return words?.[0];
  }
  if (n >= 2 && n <= 4) {
    return words?.[1];
  }
  return words?.[0];
};
