var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    },
];

const re = /((^[a-zA-Z0-9]+@)|([a-zA-Z0-9]\.[a-zA-Z0-9]+@))(?:yahoo\.com|gmail\.com)$/;
const newArr = arr.filter(arr => re.test(arr.email));
console.log(newArr);