let none = Number(prompt('Укажите первую цифру'));
    let ntwo = Number(prompt('Укажите вторую цифру'));

    while (none != 0 && ntwo != 0) {
        if (none > ntwo) {
            none = none % ntwo;
        } else {
            ntwo = ntwo % none;
        };
    }; 
console.log(` Наибольший общий делитель двух указанных чисел равен ${none + ntwo}`);   