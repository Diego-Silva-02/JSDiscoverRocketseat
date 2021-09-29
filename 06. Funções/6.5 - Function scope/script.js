// function scope
let subject = 'Create vídeo'

function createThink(subject) {
    subject = 'Write a book'
    return subject
}

function createThink2() {
    subject = 'Play a game'
}

console.log(subject)
console.log(createThink(subject))
console.log(subject)
console.log(createThink2());
console.log(subject);