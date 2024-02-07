
function pow(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
      result *= a;
    }
    return result;
  }
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Введіть число, яке підносимо у степінь: ', (a) => {
    readline.question('Введіть число, в яку степінь підносимо: ', (b) => {
        const result = pow(parseFloat(a), parseInt(b));
     
        if (!isNaN(a) && !isNaN(b) && Number.isInteger(parseFloat(a)) && Number.isInteger(parseFloat(b)) && b >= 0) {
         console.log("Результат математичної дії: ", result);
      } else {
         console.log("Введіть натуральне число!");
      }
      readline.close();
    });
  });  