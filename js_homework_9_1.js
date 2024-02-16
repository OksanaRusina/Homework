function myBlend(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const a = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[a]] = [arr[a], arr[i]];
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myBlend(arr);
console.log(arr);