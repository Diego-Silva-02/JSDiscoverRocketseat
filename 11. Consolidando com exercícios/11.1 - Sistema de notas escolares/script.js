// Sistema de notas escolares

getNote(-1)
getNote(101)
getNote(98)
getNote(0)
getNote(69)
getNote(78)
getNote(89)
getNote(45)
getNote(54)
getNote(73)

// função para a geração da nota
function getNote(note) {
    let noteA = note >= 90 && note <= 100 ? 'A' : false
    let noteB = note >= 80 && note <= 89 ? 'B' : false
    let noteC = note >= 70 && note <= 79 ? 'C' : false
    let noteD = note >= 60 && note <= 69 ? 'D' : false
    let noteF = note < 60 && note >= 0 ? 'F' : 'Nota inválida'

    if (noteA) {
        console.log(`Sua nota foi ${noteA}`)
    } else if (noteB) {
        console.log(`Sua nota foi ${noteB}`)
    } else if (noteC) {
        console.log(`Sua nota foi ${noteC}`)
    } else if (noteD) {
        console.log(`Sua nota foi ${noteD}`)
    } else {
        console.log(`Sua nota foi ${noteF}`)
    }
}
