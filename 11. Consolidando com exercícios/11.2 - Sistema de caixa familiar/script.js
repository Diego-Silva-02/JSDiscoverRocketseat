// Sistema de caixa familiar

let familia1 = {
    receitas: [30, 80],
    despesas: [60, 50]
}

let familia2 = {
    receitas: [50.30, 80],
    despesas: [60, 50]
}

let familia3 = {
    receitas: [20.45, 70],
    despesas: [90, 80]
}

calcularSaldo(familia1)
calcularSaldo(familia2)
calcularSaldo(familia3)

function calcularSaldo(obj = []) {
    // calculando a receita total
    let receitaTotal = 0

    // para cada cadeia no obj
    for (let cadeia in obj) {
        // para cada cadeia (chave) de obj
        for (receita of obj[cadeia]) {
            // se for 'despesas'
            if (cadeia === 'despesas')
                receitaTotal -= receita                
            else
                receitaTotal += receita
        }
    }

    validarSaldo(receitaTotal)
}

function validarSaldo(receitaTotal = 0) {
    let saldo0 = receitaTotal === 0
    let saldoPositivo = receitaTotal > 0

    if (saldo0) 
        console.log('Você está com a conta ZERADA')
    else if (saldoPositivo)
        console.log(`Seu saldo está positivo sobrando no total R$ ${receitaTotal.toFixed(2)}`)
    else {
        console.log(`Seu saldo está negativo e você deve no total R$ ${(receitaTotal * -1).toFixed(2)}`)
    }
}