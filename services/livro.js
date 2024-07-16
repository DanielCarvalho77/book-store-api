const fs = require("fs")

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivrosPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    
    const livroEncontrado = livros.filter(livro => livro.id === id);

    return livroEncontrado;
}

function insertNewBook (newBook){
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const newListBook = {...livros, newBook}

    fs.writeFileSync("livros.json", JSON.stringify(newListBook))
}

module.exports = {getTodosLivros, getLivrosPorId, insertNewBook}