// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum = 0;
let counter = 0;

while (counter < 20) {
    counter = counter + 1;
    sum = counter + sum;
}

console.log(sum);

