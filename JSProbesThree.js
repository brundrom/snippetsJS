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
        console.log(result + ' ');
    }
    console.log("\n");
}

expIt(5); //32
expIt(6); //64


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
    if (typeof(smile) === 'string') {
        let allSmiles = smile;
        for (let i = 0; i < howmuch; i++) {
            console.log(allSmiles);
            allSmiles += smile;
        }
    } else console.log("Incorrect data!\n");
    
}

printSmile(10, 10);
printSmile(':)', 10); //Ten lines with smiles

console.log("\n");


// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли:
// Слово (word) состоит из  (число) гласных и (число) согласных букв
const wordInfo = function (thisWord) {

    thisWord = thisWord.toLowerCase();

    let vowels = 'aeioquy';
    let conson = 'bcdfghjklmnprstvwxz';
    let vcount = 0;
    let ccount = 0;

    for (let i = 0; i <= thisWord.length; i++) {
        for (let x = 0; x < vowels.length; x++) {
            if (thisWord[i] === vowels[x]) vcount += 1;
        }

        for (let n = 0; n < conson.length; n++) {
            if (thisWord[i] === conson[n]) ccount += 1;
        }
    }

    console.log("Your word has vowels = " + vcount + " and consons = " + ccount);
}

wordInfo("case");
wordInfo("Case");
wordInfo("Check-list");

console.log("\n");

// Проверки: 'case', 'Case', 'Check-list'

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

const isPalindrom = function(firstWord, secondWord) {
    if (firstWord.length != secondWord.length) {
        console.log('Impossible. Different length.\n');
    } else {
        //all words to lowerCase;
        let firstWordL = firstWord.toLowerCase();
        let secondWordL = secondWord.toLowerCase();
        let secondVersaWord = '';
        for (let i = secondWord.length - 1; i >= 0; i--) {
            //console.log(i + ': ' + secondWordL[i]);
            secondVersaWord += secondWordL[i];            
        }

        let result = false; //default

        for (let i = 0; i <= firstWord.length; i++) {
            if(firstWordL[i] != secondVersaWord[i]) {
                result = false;
                break;
            } else {
                result = true;
            }
        }

        if(result != false) {
            console.log("Yes. Your words are palindrome.\n");
        } else {
            console.log("No. Your words aren't palindrome\n");
        }
    }
}

isPalindrom('Arabica', 'AcibUra');
isPalindrom('ArAbIcA', 'aCiBaRA');
isPalindrom('abba', 'Abba');
isPalindrom('cat', 'DOG');
isPalindrom('bird', 'cat');

// Проверки: 'abba', 'Abba'
