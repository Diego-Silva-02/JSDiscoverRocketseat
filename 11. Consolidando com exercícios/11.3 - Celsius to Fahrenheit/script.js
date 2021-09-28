// Celsius to Fahrenheit

try {
    console.log(transformDegree('50C'))
    console.log(transformDegree('100c'))
    console.log(transformDegree('68F'))
    console.log(transformDegree('50F'))
    console.log(transformDegree('32f'))
    transformDegree('32Z')
    transformDegree('32D')
} 
catch (error) {
    console.log(error.message)
}




function transformDegree(degree) {
    const itsCelsius = degree.toUpperCase().includes('C')
    const itsFahrenheit = degree.toUpperCase().includes('F')
    
    if (itsCelsius) {
        let celsius = Number(degree.toUpperCase().replace('C',''))
        let fahrenheit = (celsius) => (celsius * 1.8) + 32

        let phrase = (degree, newDegree) => (`${degree}C equivale a ${newDegree}F.`)

        return phrase(celsius, fahrenheit(celsius))
        //convertCelsiusToFahrenheit(degree.toUpperCase().replace('C',''))
    }
    else if (itsFahrenheit){
        let fahrenheit = Number(degree.toUpperCase().replace('F',''))
        let celsius = (fahrenheit) => (fahrenheit - 32) / 1.8 

        let phrase = (degree, newDegree) => (`${degree}F equivale a ${newDegree}C.`)

        return phrase(fahrenheit, celsius(fahrenheit))

        //convertFahrenheitToCelsius(degree.toUpperCase().replace('F',''))
    }
    else{
        throw new Error('Este tipo de temperatura não existe');
    }
    
}

// function convertCelsiusToFahrenheit(celsius) {
//     let fahrenheit = (celsius * 1.8) + 32
//     console.log(`${celsius}C equivale a ${fahrenheit.toFixed(2)}F.` );
// }

function convertFahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8
    console.log(`${fahrenheit}F equivale a ${celsius.toFixed(2)}C.` );
}