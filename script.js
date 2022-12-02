function convert() {
    var result;
    
    //pegar valor do input
    var value = document.querySelector('.input-value').value;
    
    //pegar valor dos selects;
    var grauPrimare = document.querySelector("#temp-pri");
    var typeGrau = grauPrimare.value;
    
    var grauConvert = document.querySelector("#temp-seg");
    var typeConvert = grauConvert.value;
    
    if (value == "") {
        value = 0;
    }
    
    //verifica qual o valor do select selecionado;
    switch (typeGrau) {
        case "celsius":
            
            //celsius -> celsius
            if (typeConvert == "celsius") {
                document.querySelector('.result').innerHTML = (value + "°C é igual a " + value + "°C");
            }
            
            //celsius -> kelvin
            if (typeConvert == "kelvin") {
                result = parseInt(value) + 273.15;
                document.querySelector(".result").innerHTML = (value + "°C é igual a " + (result.toFixed(2)) + "K");
            }
            
            //celsius -> fahrenheit
            if (typeConvert == "fahrenheit"){
                result = parseInt(value * 9/5) + 32
                document.querySelector(".result").innerHTML = (value + "°C é igual a " + (result.toFixed(2)) + "°F");
            }
            
            break;

        case "fahrenheit":
            
            //fahrenheit -> celsius
            if (typeConvert == "celsius") {
                result = parseInt(value - 32) * 5/9 
                document.querySelector(".result").innerHTML = (value + "°F é igual a " + (result.toFixed(2)) + "°C");
        
            }
            
            //fahrenheit -> kelvin
            if (typeConvert == "kelvin") {
                result = parseInt(value - 32) * 5/9 + 273.15
                document.querySelector(".result").innerHTML = (value + "°F é igual a " + (result.toFixed(2)) + "K");
            }
            
            //fahrenheit -> fahrenheit
            if (typeConvert == "fahrenheit"){
                document.querySelector('.result').innerHTML = (value + "°F é igual a " + value + "°F");
            }
            
            break;

        case "kelvin":
            
            //kelvin -> celsius
            if (typeConvert == "kelvin") {
                document.querySelector('.result').innerHTML = (value + "K é igual a " + value + "K");
            }
            
            //kelvin-> kelvin
            if (typeConvert == "celsius") {
                result = parseInt(value) - 273.15;
                document.querySelector(".result").innerHTML = (value + "°K é igual a " + (result.toFixed(2)) + "°C");
            }
            
            //kelvin -> fahrenheit
            if (typeConvert == "fahrenheit"){
                result = parseInt(value - 273.15) * 9/5 + 32
                document.querySelector(".result").innerHTML = (value + "°K é igual a " + (result.toFixed(2)) + "°F");
            }
            
            break;
    }
}
