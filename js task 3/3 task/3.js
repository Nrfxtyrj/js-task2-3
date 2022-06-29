let number = Number(prompt('Укажите число'));
    let divisor = [];
    for (let i = 2; i < number; i++) {
        if (number % i == 0 && number !== 1 ) {
            console.log(i);
            divisor.push(i);
        };
    };          
console.log(`Все делители числа ${number}:  ${divisor}`);