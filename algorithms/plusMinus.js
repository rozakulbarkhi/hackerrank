"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

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

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
