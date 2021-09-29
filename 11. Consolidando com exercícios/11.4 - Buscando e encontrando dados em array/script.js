// Buscando e encontrando dados em array

const booksByCategory = [
    {
        category: "Riqueza",
        books:[
            {
                title: "Os segredos da mente milhonária",
                author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kyosaki e Sharon L. Lechter"
            }
        ]
    },
    {
        category: "Inteligência emocional",
        books:[
            {
                title: "Você é insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            }
        ]
    }
]


// 1. Número de categorias e o número de livros por categoria
const totalCategorys = booksByCategory.length
console.log('Questão 01')
console.log(`O número de categorias é ${totalCategorys}.`)

// objetos de categoria
for(let category of booksByCategory){
    // parâmetro do objeto
    console.log(`Na categoria ${category.category} temos ${category.books.length} livros.`)
}
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 2. Número de autores
console.log('\nQuestão 02')

function countAuthors() {
    authors = []

    for (let category of booksByCategory){
        for (let book of category.books){
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log(`O total de autores é ${authors.length}.`)
}

countAuthors()

// 3. Livros do autor Augusto Cury
console.log('\nQuestão 03')

for (let category of booksByCategory){
    for (let book of category.books){
        if (book.author == 'Augusto Cury') {
            console.log(`O Livro "${book.title}" pertence ao autor Augusto Cury.`)
        }
    }
}

// 4. Transformar a função acima em uma função que receba o nome de um autor e devolva os livros deste
console.log('\nQuestão 04')

let bookByAuthorName = (author) => {
    for (let category of booksByCategory){
        for (let book of category.books){
            if (book.author == author) {
                console.log(`O Livro "${book.title}" pertence ao autor ${author}.`)
            }
        }
    }
}

bookByAuthorName('Robert T. Kyosaki e Sharon L. Lechter')