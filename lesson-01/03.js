/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0;
let counter = 0;

while (counter < 20) {
  counter = counter + 1;

  if (counter % 2 === 0) {
    console.log("Чётное");
    
  } else {
    console.log("Нечётное");
    sum = counter + sum;
    
  }

}

console.log(sum);

