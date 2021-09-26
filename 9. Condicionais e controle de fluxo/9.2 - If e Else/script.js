// If e else

let temperature = 36.9
let lowTemperature = temperature < 37
let mediumTemperature = temperature < 38.5

if (lowTemperature)
    console.log("Saudável")
else if(mediumTemperature) 
    console.log("Febre moderada")
else 
    console.log("Febre alta")
