const prompt = require('prompt-sync')();

let age = prompt('Скільки Вам років? - ');

if (!isNaN(age) && Number.isInteger(parseFloat(age))) {
    if (age > 0 && age <= 100) {
        if (age === 1 || (age % 10 === 1 && age != 11)) {
            console.log('Мені ' + age + ' рік');
        } else if (age < 5 || ((age % 10 === 2 && age != 12) || (age % 10 === 3 && age != 13) || (age % 10 === 4 && age != 14))){
            console.log('Мені ' + age + ' роки');
        } else {console.log('Мені ' + age + ' років')}
    } else {
        console.log('Введіть правильний вік (від 1 до 100 років включно)');
    }
} else {
    console.log('Введіть вік (ціле число)!');
}
