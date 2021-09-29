// 7.4 - Contando caracteres e digitos
// Contar quantos caracteres tem uma palavra e quantos digitos tem um número
// let word = "Paralelepipedo"
// console.log(word.length)

// let number = 1234
// console.log(String(number).length)

// 7.5 - Casas decimais
// let numberDecimal = 43854345.38574354
// console.log(numberDecimal)
// console.log(numberDecimal.toFixed(2))
// console.log(numberDecimal.toFixed(2).replace('.',','))

// 7.6 - Maiúsculas e minúsculas
// let wordNormal = "Programar é muito satisfatório"
// console.log(wordNormal.toUpperCase())
// console.log(wordNormal.toLowerCase())

// 7.7 - Separando strings
// let phrase = "A necessidade de se retirar de cena só aparece depois que você estabeleceu a sua presença. Afaste cedo demais e você não será respeitado, será esquecido."
// // Separando por espaços
// let myArray = phrase.split(" ")
// console.log(myArray)
// // Juntando com _(underscore)
// let phraseWithUnderscore = myArray.join('_')
// console.log(phraseWithUnderscore)

// 7.8 - Encontrando palavras em frases
// let phraseWithLoveWord = "I will be love and in this way I will be everything"
// console.log(phraseWithLoveWord.includes("love"))
// console.log(phraseWithLoveWord.includes("Love"))

// 7.9 - Criando um array com construtor
// let myArrayWithConstructor = new Array('a','b','c')
// console.log(myArrayWithConstructor)

// 7.10 - Elementos do Array
// console.log(
//     ['b', {type: 'array'},
//     function () { return 'alo' }
// ][2]())
// Contando os elementos do array
// console.log(['a','b','c'].length)

// 7.11 - Strings para arrays
// let beforeArray = 'manipulation'
// console.log(Array.from(beforeArray))

// 7.12 Manipulando arrays

let techs = ['html', 'css', 'js']

// Adicionar um item no fim
techs.push('react-js')
console.log(techs)
// Adicionar um item no começo
techs.unshift('sql')
console.log(techs)
// Remover um item no começo
techs.shift()
console.log(techs)
// Remover um item no fim
techs.pop()
console.log(techs)
// Pegar somente alguns elementos do array
console.log(techs.slice(1, 3)) // índice 1 → de onde vai começar
                                // índice 2 → até qual elemento (considerando o início do array)
// Remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 1)
console.log(techs)
// Encontrar a posição de um elemento no array
console.log(techs.indexOf('html'))
console.log(techs.indexOf('js'))
console.log(techs.indexOf('pão de queijo'))