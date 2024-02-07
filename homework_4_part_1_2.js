function myTriangle(a, b) {
    let triangle = '';
    let i = 1;
    while (i <= a) {
        triangle += b.repeat(i) + '\n';
        i++;
    }
    return triangle;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введіть висоту трикутника - число: ', (a) => {
    readline.question('Введіть символ: ', (b) => {
        console.log(myTriangle(parseInt(a), b));
        readline.close();
    });
});
