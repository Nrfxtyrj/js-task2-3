let none = Number(prompt('Укажите число начала диапазона'));
    let ntwo = Number(prompt('Укажите конечную цифру'));
    let sum = 0;

    if (none < ntwo) {
        while (none <= ntwo) {
            sum += none;
            none++;
        };
    } else if (none > ntwo) {
        while (none >= ntwo) {
            sum += ntwo;
            ntwo++;
        };
    };
    console.log(`Сумма всех чисел в диапазоне ${sum}`);