// Falsy e truthy

/*
    Falsy é quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log( 0 ? 'verdadeiro' : 'false')

/*
    Truthy é quando um valor é considerado true em contextos que onde um booleano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( Infinity ? 'verdadeiro' : 'false')
