/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = () => {
        return this.name + " está andando"
    }
}
const diego = new Person("Diego")
const joão = new Person("João")
console.log(diego);
console.log(joão);
console.log(joão.walk());

let namePerson = new String("Mayk")
console.log(namePerson);

let date = new Date("2021-09-23")
console.log(date);