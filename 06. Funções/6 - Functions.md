# Funtions

## 6.1 - Functions
### Para que serve?
* Para agrupar o código e evitar a repetição de códigos
* Nela declaramos procedimentos que devem acontecer no código

### Como é dividida?
* Primeiro temos a declaração (declaration) e depois a chamada (call)

### Caso seja removida e ainda assim seja chamada, o que acontece?
* Erro de referência

## 6.2 - Argumentos e parâmetros
* Function expression / Function anonymous (função sem nome)
* Parâmetros (Parameters) → Meio pelo qual um função pode receber valores
* Argumentos (Arguments) → Valores passados a uma função

## 6.3 - Retornando valores dentro da função
* Se a função não tiver retorno, o seu retorno será __undefined__
* Quando uma variável é retornada, caso ela não tenha identificador (var, let, const etc...), ela também poderá ser pega no código fora de seu escopo

## 6.4 - Outra maneira de entender funções
* Uma função é um liquidificador
* As variáveis passadas a ela são frutas
* A variável que recebe a função é um copo
    * No liquidificador colocamos as frutas que queremos para fazer-mos o suco e adicionamos o seu conteúdo ao copo

## 6.5 - Function scope
* A sobreescrita de uma variável por meio da função só acontece quando esta não é instanciada em local algum da função mas é utilizada
* Caso a função receba seu valor em algum momento, a alteração não alterará a variável global

## 6.6 - Function hoisting
* Uma função pode receber um "hoisting" no caso em que ela não esteja dentro de uma variável (seja qual tipo for)
* Mas no caso de a função não estar armazenada em uma variável, ela pode receber um hoisting continuando a execução do código

## 6.7 - Arrow function
* Jeito mais atual e rápido de se declarar uma função expression (ou anonymous)
* Utiliza-se apenas os parênteses para passar seus parâmetros, uma seta (arrow) e as chaves para a finalidade da função

## 6.8 - Callback function
* Função que chama outra função

## 6.9 - Funções construtoras
* Utiliza a palavra-chave "new" ao ser instanciada
* Cria um novo objeto
* Utiliza a palavra-chave "this" para definir os parâmetros do objeto