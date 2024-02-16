const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName, currentCompany, check = new Set()) {

    if (currentCompany.name === companyName) {

        return currentCompany;
    }

    check.add(currentCompany);


    if (currentCompany.clients) {
        for (let client of currentCompany.clients) {

            if (!check.has(client)) {
                const result = findValueByKey(companyName, client, check);
                if (result) {
                    return result;
                }
            }
        }
    }


    if (currentCompany.partners) {
        for (let partner of currentCompany.partners) {

            if (!check.has(partner)) {
                const result = findValueByKey(companyName, partner, check);
                if (result) {
                    return result;
                }
            }
        }
    }

    return null;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('Введіть назву компанії: ', (companyName) => {

    const companyInfo = findValueByKey((companyName), company);
    if (companyInfo) {
        console.log(companyInfo);
    } else {
        console.log(`Компанія '${companyName}' не знайдена.`);
    }
    readline.close();
});
