// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
let digit = 2;
let result = 1;

for (let i = 0; i <= 10; i++) {
    result *= digit;
    console.log(result);
}

console.log("\n");


// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const expIt = function(numpow) {
    result = 1;
    for (let i = 0; i < numpow; i++) {
        result *= digit;
    }
    console.log(result);
}

expIt(5); //32
expIt(6); //64

console.log("\n");

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let smile = ':)';
let moresmile = ':)'
for (let i = 1; i <= 5; i++) {
    console.log(moresmile);
    moresmile += smile;
}

console.log("\n");

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода
// e.g. function printSmile(stroka, numberOfRows)
const printSmile = function(smile, howmuch) {
    let allSmiles = smile;
    for (let i = 0; i < howmuch; i++) {
        console.log(allSmiles);
        allSmiles += smile;
    }
}

printSmile(':)', 10) //Ten lines with smiles

console.log("\n");


// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли:
// Слово (word) состоит из  (число) гласных и (число) согласных букв



// Проверки: 'case', 'Case', 'Check-list'

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'
