/* function getvalue() {
    let uservalue = document.getElementById("user1").value;
    document.getElementById("user2").value = uservalue;
} */

function calc(){
    let uservalue =  parseInt(document.querySelector("#user1").value);
    let uservalues =  document.querySelector("#user3").value;
    let uservaluess =  document.querySelector("#user4").value;
    let responses = "Please enter a valid temperature value";
    var calculate;

    if (uservalue == "" || isNaN(uservalue) || Number(uservalue) <= 0)
    {
       document.getElementById("user2").value = responses;        
    
    }


    else if (uservalues == 'Celsius' && uservaluess == 'Fahrenheit'){
        calculate =   (9/5)*uservalue+32; 
        document.getElementById("user2").value = calculate;       
    }

    else if (uservalues == 'Celsius' && uservaluess == 'Kelvin'){
        calculate =   uservalue+273.15;
        document.getElementById("user2").value = calculate;
    }

    else if (uservalues == 'Celsius' && uservaluess == 'Celsius'){
        calculate =   uservalue;
        document.getElementById("user2").value = calculate;
    }

    else if (uservalues == 'Fahrenheit' && uservaluess == 'Celsius'){
        calculate =  (uservalue-32)*5/9;
        document.getElementById("user2").value = calculate;
    }

    else if (uservalues == 'Fahrenheit' && uservaluess == 'Kelvin'){
        calculate =  (uservalue-32)*5/9+273.15;
        document.getElementById("user2").value = calculate;
    }

    else if (uservalues == 'Fahrenheit' && uservaluess == 'Fahrenheit'){
        calculate =  uservalue;
        document.getElementById("user2").value = calculate;
    }

    else if (uservalues == 'Kelvin' && uservaluess == 'Fahrenheit'){
        calculate =  (uservalue-273.15)*9/5+32;
        document.getElementById("user2").value = calculate;
    }

    else if (uservalues == 'Kelvin' && uservaluess == 'Celsius'){
        calculate =  uservalue-273.15;
        document.getElementById("user2").value = calculate;
    }

    else if (uservalues == 'Kelvin' && uservaluess == 'Kelvin'){
        calculate =  uservalue;
        document.getElementById("user2").value = calculate;
        
  
    }



  
}

function reset(){
    document.getElementById('user2').remove();
}