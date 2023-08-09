/* function getvalue() {
    let uservalue = document.getElementById("user1").value;
    document.getElementById("user2").value = uservalue;
} */

function calc(){
    let uservalue =  parseInt(document.querySelector("#user1").value);
    let uservalues =  document.querySelector("#user3").value;
    let uservaluess =  document.querySelector("#user4").value;
    var calculate;

    if (uservalues == 'Celsius' && uservaluess == 'Fahrenheit'){
        calculate =   (9/5)*uservalue+32;        
    }

    else if (uservalues == 'Celsius' && uservaluess == 'Kelvin'){
        calculate =   uservalue+273.15;
    }

    else if (uservalues == 'Celsius' && uservaluess == 'Celsius'){
        calculate =   uservalue;
    }

    else if (uservalues == 'Fahrenheit' && uservaluess == 'Celsius'){
        calculate =  (uservalue-32)*5/9;
    }

    else if (uservalues == 'Fahrenheit' && uservaluess == 'Kelvin'){
        calculate =  (uservalue-32)*5/9+273.15;
    }

    else if (uservalues == 'Fahrenheit' && uservaluess == 'Fahrenheit'){
        calculate =  uservalue;
    }

    else if (uservalues == 'Kelvin' && uservaluess == 'Fahrenheit'){
        calculate =  (uservalue-273.15)*9/5+32;
    }

    else if (uservalues == 'Kelvin' && uservaluess == 'Celsius'){
        calculate =  uservalue-273.15;
    }

    else if (uservalues == 'Kelvin' && uservaluess == 'Kelvin'){
        calculate =  uservalue;
        
    }

    else {
        // prompt('Kindly enter a number')
    }
document.getElementById("user2").value = calculate;    


}