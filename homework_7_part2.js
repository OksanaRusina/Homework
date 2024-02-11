
function pad(stringInput, symbol = ' ', charNum, place = 'end') {
  
    if (stringInput.length >= charNum) {
          return stringInput; 
      }
      
    const newLength = charNum - stringInput.length;
    const adding = symbol.repeat(newLength);
    const unknownPlace = 'Введіть "start" чи "end"!';
      if (place === 'start') {
          return adding + stringInput;
      } else if (place === 'end') {
          return stringInput + adding;
      } else {
         return unknownPlace;
      }
  }
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Введіть дані (рядок): ', (stringInput) => {
      readline.question('Введіть будь-який символ: ', (symbol) => {
          readline.question('Введіть кількість символів, яку отримуємо: ', (charNum) => {
            charNum = parseInt(charNum);
              readline.question('Куди додавати символи (start/end): ', (place) => {
                  place = place.trim() && place.toLowerCase();
                  
                  const stringOutput = pad(stringInput, symbol, charNum, place);
                  console.log('Результат: ', stringOutput);
                  readline.close();
              });
          });
      });
  });
  
  
  