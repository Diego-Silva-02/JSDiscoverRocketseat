# Manipulando dados

## 7.1 - Prototype
* JavaScript → Linguagem baseada em __protótipos__ (prototypes)
* Todo objeto herda de um protótipo ascendente a ele
    * Devido isso o objeto vai herdar também os métodos do protótipo 

## 7.2 - Type conversion coesion
* Alteração de um tipo de dados para outro
    * __Type conversion__ (typecasting) → Você explicitamente altera um tipo de dados para outro
    * __Type coesion__ → O JavaScript faz implicitamente essa troca

## 7.3 - Strings em números
* __Number()__ → Tranforma em número
* __String()__ → Transforma em string

## 7.4 - Contando caracteres e digitos
* Para contar os caracteres utiliza-se o __length__
* Já para contar os dígitos de um número deve-se transforma-lo em string e depois usar o __length__

## 7.5 - Casas decimais
* __toFixed()__ → Utilizado para __formatar a quantia de casas decimais__ que se deseja utilizar no programa
* __replace()__ → Repõe um texto __em uma string__ por outro texto
* __Obs.:__ Ambos convertem o tipo de dados para __string__

## 7.6 - Maiúsculas e minúsculas
* __toUpperCase()__ → Converte o texto em maiúsculas
* __toLowerCase()__ → Converte o texto em minúsculas

## 7.7 - Separando strings
* __split()__ → Usado para separar uma string
    * Por padrão retorna um __array__
* __join()__ → Usado para juntar valores de um array
    * Por padrão retorna uma __string__

## 7.8 - Encontrando palavras em frases
* __includes()__ → Procura pela __string__ que for passada no método
    * É __case-sensitive__

## 7.9 - Criando um array com construtor
* Utiliza-se o __new__ com o tipo de dados __Array__
    * Ex.: 
    ```js
        let myArrayWithConstructor = new Array('a','b','c')
    ```

## 7.10 - Elementos do Array
* Um array pode ter múltiplos tipos de elementos
* Para contar os elementos de um array pode-se utilizar o __length__

## 7.11 - Strings para arrays
* Utiliza-se o __Array.from()__ para transformar uma __string__ em um __array__

## 7.12 Manipulando arrays
* __push()__ → Adicionar um item no final do array
* __unshift()__ → Adicionar um item no começo do array
* __shift()__ → Remover um item no começo do array
* __pop()__ → Remover um item no fim do array
* __slice()__ → Pegar somente alguns elementos do array
    * Índice 1 → de onde vai começar
    * Índice 2 → até qual elemento (considerando o início do array)
* __splice()__ → Remover 1 ou mais itens em qualquer posição do array
* __indexOf()__ → Encontrar a posição de um elemento no array