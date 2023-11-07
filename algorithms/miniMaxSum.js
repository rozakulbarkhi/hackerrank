/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const currentSum = arr
      .filter((_, item) => item !== i)
      .reduce((acc, sum) => acc + sum, 0);

    result.push(currentSum);
  }

  const max = Math.max(...result);
  const min = Math.min(...result);

  console.log(min, max);
}

miniMaxSum([1, 2, 3, 4, 5]);
