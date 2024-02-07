function myTriangle(a, b) {
    let triangle = '';
    for (let i = 1; i <= a; i++) {
        triangle += b.repeat(i) + '\n';
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
