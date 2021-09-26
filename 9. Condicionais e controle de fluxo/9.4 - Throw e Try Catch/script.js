// Throw

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(`Seu nome é ${name}`)
}

// sayMyName()

// Try Catch
try {
    sayMyName('Diego')
} catch (e) {
    console.log(e)
}

console.log('Após a função de erro')