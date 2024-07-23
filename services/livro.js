const fs = require("fs")

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroFiltrado = livros.filter( livro => livro.id == id )[0]
    return livroFiltrado
}

function insertNewBook (newBook){
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const newListBook = {...livros, newBook}

    fs.writeFileSync("livros.json", JSON.stringify(newListBook))
}

function modificaLivro(modificacoes,  id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id == id)
    
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletaLivro(id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
    const livros = livrosAtuais.filter(livro => livro.id != id);
    fs.writeFileSync("livros.json", JSON.stringify(livros));
    
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insertNewBook,
    modificaLivro,
    deletaLivro
}