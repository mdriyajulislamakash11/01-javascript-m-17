/*
Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.
Output:
Print the result in 2 decimal places.
Sample Input:
75.25, 65, 80, 35.45, 99.50
Sample Output:
71.04
*/

const Mathematics = 75.25
const Biology =  65;
const chemistry = 80;
const physics = 35.45;
const Bangla = 99.50;

const total = Mathematics + Biology + chemistry + physics + Bangla;
const result = total/5;

console.log(result.toFixed(2))


