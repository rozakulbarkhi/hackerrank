/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  const length = arr.length;
  let positive = [];
  let negative = [];
  let zero = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive.push(arr[i]);
    } else if (arr[i] < 0) {
      negative.push(arr[i]);
    } else {
      zero.push(arr[i]);
    }
  }

  console.log(positive.length / length);
  console.log(negative.length / length);
  console.log(zero.length / length);
}

plusMinus([-4, 3, -9, 0, 4, 1]);
