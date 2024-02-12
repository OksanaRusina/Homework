var services = {
    "Стрижка": "60 грн",
    "Гоління": "80 грн",
    "Миття голови": "100 грн",
    price(...someServices) {
        let sum = 0;

        if (someServices.length === 0) {
            for (let i in this) {
                if (typeof this[i] === 'string') {
                    let price = parseFloat(this[i]);
                    sum += price;
                }
            }
            console.log('Загальна сума всіх послуг:', sum + ' грн');
        } else {
            for (let i of someServices) {
                if (typeof this[i] === 'string') {
                    let price = parseFloat(this[i]);
                    sum += price;
                }
            }
            console.log('Загальна сума наданих послуг:', sum + ' грн');
        }
    },
    minPrice(...someServices) {
        let prices = [];

        if (someServices.length === 0) {
            for (let i in this) {
                if (typeof this[i] === 'string') {
                    prices.push(parseFloat(this[i]));
                }
            }
        } else {
            for (let i of someServices) {
                if (typeof this[i] === 'string') {
                    prices.push(parseFloat(this[i]));
                }
            }
        }

        let min = Math.min(...prices);
        console.log('Мінімальна ціна послуг:', min + ' грн');
    },
    maxPrice(...someServices) {
        let prices = [];

        if (someServices.length === 0) {
            for (let i in this) {

                if (typeof this[i] === 'string') {
                    prices.push(parseFloat(this[i]));
                }
            }
        } else {
            for (let i of someServices) {
                if (typeof this[i] === 'string') {
                    prices.push(parseFloat(this[i]));
                }
            }
        }

        let max = Math.max(...prices);
        console.log('Максимальна ціна послуг:', max + ' грн');
    }
};

services.price();
services.minPrice();
services.maxPrice();
services['Зачіска'] = '120 грн';

services.price();
services.price('Стрижка', 'Зачіска');

services.minPrice();
services.minPrice('Гоління');

services.maxPrice();
services.maxPrice('Стрижка', 'Зачіска');
