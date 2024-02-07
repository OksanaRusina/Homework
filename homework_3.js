const prompt = require('prompt-sync')();

console.log('Конвертування здійснюється виключно у наступному порядку: кілограми -> грами, кілометри -> метри, години -> хвилини! ');

let userInputPar;
let userInputNum;

do {
    userInputPar = prompt('Оберіть одиницю вимірювання, ввівши кг, км або год:  ');
    userInputPar = userInputPar.trim(); 
} while (userInputPar !== "кг" && userInputPar !== "км" && userInputPar !== "год");

do {
    userInputNum = prompt("Введіть будь-яке раціональне число, що більше нуля:  ");
    userInputNum = userInputNum.trim(); 
} while (userInputNum === "" || isNaN(parseFloat(userInputNum)) || parseFloat(userInputNum) <= 0 || !isFinite(userInputNum)); 

switch(userInputPar.toLowerCase()) {
    case "кг":
       console.log(userInputNum + " кг - " + userInputNum * 1000 + " г");
       break;
    case "км":
        console.log(userInputNum + " км - " + userInputNum * 1000 + " м");
       break;
    case "год":
        console.log(userInputNum + " год - " + userInputNum * 60 + " хв");
       break;
}
