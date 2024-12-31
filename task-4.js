/**
 * ask-4
What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers.
 */

var a = isNaN("11");
console.log("result", a);
// $ node task-4.js
// result false

var b = isNaN(1 - 10);
console.log("result",b);
// $ node task-4.js
// result false