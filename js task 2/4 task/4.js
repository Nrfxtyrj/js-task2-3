let year = prompt("Напишите год"); 
    if ((year % 4) == 0) {
    message = 'високосный год';
    } 
    else if ((year % 4) > 0) {
    message = 'не високосный год';
    } 
console.log(message);