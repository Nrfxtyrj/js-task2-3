let data = prompt("Напишите трехзначное число для сравнения чисел в нем"); 
    if (data[0] == data[1]) {
    message = 'Есть одинаковые числа';
    } 
    else if (data[1] == data[2]) {
    message = 'Есть одинаковые числа';
    } 
    else if (data[0] == data[2]) {
        message = 'Есть одинаковые числа';
    } else  {
        message = 'Нет одинаковых чисел';
    } 
console.log(message);