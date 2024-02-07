
function sumNum(a, b) {
    let sum = 0;
       for (let i = a; i <= b; i++) {
        if (i > 0 && i % 3 !== 0) { 
            sum += i;
        }
    }
    return sum;
}

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      readline.question('Введіть бажане число, з якого починаємо рахувати (наприклад, 1): ', (a) => {
        readline.question('Введіть бажане число, до якого рахуємо (наприклад, 100): ', (b) => {
              const result = sumNum(parseFloat(a), parseInt(b));
             
              if (!isNaN(a) && !isNaN(b) && Number.isInteger(parseFloat(a)) && Number.isInteger(parseFloat(b)) && b >= 0) {
                console.log("Ваш результат: " + sumNum(parseInt(a), parseInt(b)));
              } else {
                console.log("Введіть натуральне число!");
              }
              
             readline.close();
        });
      });