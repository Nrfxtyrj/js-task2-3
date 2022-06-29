let icon = prompt("Впишите число от 0 до 9");
    if (icon == 0) {
    message = ')';
    } 
    else if (  icon == 1) {
    message = '!';
    } 
    else if ( icon == 2) {
        message = '@';
    }
    else if ( icon == 3) {
        message = '#';
    }
    else if ( icon == 4) {
        message = '$';
    }
    else if ( icon == 5) {
    message = '%';
    }
    else if ( icon == 6) {
        message = '^';
    }
    else if ( icon == 7) {
        message = '&';
    }
    else if ( icon == 8) {
        message = '*';
    }
    else if ( icon == 9) {
        message = '(';
    }        
console.log(message);