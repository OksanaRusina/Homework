
function randomNumberWithOperation(amount) {
    let evenCount = 0;
    let oddCount = 0;

        for (let i = 0; i < amount; i++) {
        const randomNumber = Math.floor(Math.random() * (1000 - 100) + 100); 
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
        }

    const evenPercent = (evenCount / amount) * 100;
    const oddPercent = (oddCount / amount) * 100;
    return { evenCount, oddCount, evenPercent, oddPercent };
}
 
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question('Введіть кількість рандомних чисел, що будуть згенеровані: ', (amount) => {
    const { evenCount, oddCount, evenPercent, oddPercent } = randomNumberWithOperation(parseInt(amount));
    if (!isNaN(amount) && amount == parseInt(amount) && amount > 0) {
    console.log ('Кількість рандомних чисел: ' + amount);
    console.log ('Кількість парних чисел: ' + evenCount);
    console.log ('Кількість непарних чисел: ' + oddCount);
    console.log('Співвідношення парних до непарних: ' + evenPercent + '/' + oddPercent);
    } else {console.log('Введіть натуральне число!')}
    readline.close();
  });
  