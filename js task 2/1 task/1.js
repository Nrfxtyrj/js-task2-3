let year = prompt("Впишите возраст для определения человека!");
    if (year < 12) {
    message = 'Ребенок';
    } 
    else if (  year < 18) {
    message = 'Подросток';
    } 
    else if ( year < 60) {
    message = 'Взрослый';
    } 
    else if (60 < year) {
    message = 'Старик';
    } 
console.log(message);