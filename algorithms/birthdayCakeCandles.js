/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  // Write your code here
  const result = [];
  const max = Math.max(...candles);

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === max) {
      result.push(candles[i]);
    }
  }

  return result.length;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));
