let userNumber = prompt('Укажите число'); 
    let count = 0;

    for (let i = 0; i < userNumber.length; i++) {
        count += 1;
    };
console.log(`Число состоит из ${count} цифр`);