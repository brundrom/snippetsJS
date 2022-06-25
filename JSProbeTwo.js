//Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст. (from JSProbeOne)
//This variables uses in all functions;
let age_2 = 18;
let age_3 = 60;

console.log("First iteration");

//Age function
const checkAge = function(age_1) {

    if (age_1 < age_2) {
        console.log("You don't have access cause your age is " + age_1 + " It's less than ")
    } else if (age_1 >= age_2 && age_1 < age_3) {
        console.log("Welcome! ")
    } else if (age_1 > age_3) {
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical Work")
    }    
}

// Вывести в консоль результат работы функции с возрастами 17, 18, 61
checkAge(17);
checkAge(18);
checkAge(61);

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
console.log("\nSecond iteration");

//Age function with Number only;
const checkAgeNumber = function(age_1) {

    if (typeof(age_1) != 'number') { 
        console.log("Incorrect type");
    } else {
        if (age_1 < age_2) {
            console.log("You don't have access cause your age is " + age_1 + " It's less than ")
        } else if (age_1 >= age_2 && age_1 < age_3) {
            console.log("Welcome! ")
        } else if (age_1 > age_3) {
            console.log("Keep calm and look Culture channel")
        } else {
            console.log("Technical Work")
        }
    }    
}

// Вывести в консоль результат работы функции с возрастами 17, 18, 61 (Button for check inccorrect types.)
checkAgeNumber("button");
checkAgeNumber(17);
checkAgeNumber(18);
checkAgeNumber(61);

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
console.log("\nThird iteration");

//Age function with Number only;
const checkAgeNumberAndTwo = function(age_1) {
    //check string two
    if(age_1 === '2') { 
        console.log("Catched!");
        age_1 = Number(age_1);
    }

    //Make magic now
    if (typeof(age_1) != 'number') { 
        console.log("Incorrect type");
    } else {
        if (age_1 < age_2) {
            console.log("You don't have access cause your age is " + age_1 + " It's less than ")
        } else if (age_1 >= age_2 && age_1 < age_3) {
            console.log("Welcome! ")
        } else if (age_1 > age_3) {
            console.log("Keep calm and look Culture channel")
        } else {
            console.log("Technical Work")
        }
    }    
}

checkAgeNumberAndTwo('2');
checkAgeNumberAndTwo('button');
checkAgeNumberAndTwo(17);
checkAgeNumberAndTwo(18);
checkAgeNumberAndTwo(61);

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
console.log("\n4 task code in github file page.html");