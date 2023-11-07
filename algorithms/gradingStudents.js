/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  // Write your code here
  const result = [];

  for (let i = 0; i < grades.length; i++) {
    const element = grades[i];
    const multiples5 = Math.ceil(element / 5) * 5;

    if (element < 38) {
      result.push(element);
    } else if (Math.abs(element - multiples5) < 3) {
      result.push(multiples5);
    } else {
      result.push(element);
    }
  }

  return result;
}

console.log(gradingStudents([73, 67, 38, 33]));
