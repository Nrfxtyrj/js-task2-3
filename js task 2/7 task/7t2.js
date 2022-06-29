let money = prompt("Укажите сумму покупки"); 

if ( money < 200) {
    message = money;
} 
else if ( money < 300) {
    message = money - money/100 * 3;
} 
else if ( money < 500) {
    message = money - money/100 * 5;
} 
else if ( 500 < money) {
    message = money - money/100 * 7;
} 
console.log(message);