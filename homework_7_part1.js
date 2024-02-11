function notNumber(a) {
    return a * 1; 
  }
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Введіть будь-які дані: ', (a) => {
    if (notNumber(a) !== notNumber(a)) {
      console.log('This is not a number!');
    } else {
      console.log('This is a number!');
    }
  readline.close();
  });