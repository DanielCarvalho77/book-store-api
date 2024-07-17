const { getTodosLivros, getLivroPorId, insertNewBook, modificaLivro, deletaLivro } = require("../services/livro");


function getLivros(req, res){
        try {
            const livros = getTodosLivros();
            
            res.send(livros);
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }

    function getLivro(req, res) {
        try {
            const id = req.params.id
            const livro = getLivroPorId(id)
            res.send(livro)
            } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }

    function createBook (req, res ){
        try {

            const newBook = req.body;
            insertNewBook(newBook);
            
            res.status(201);
            res.send("Livro cadastrado com sucesso!");
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }

    function patchLivro(req, res) {
        try {
            const id = req.params.id
            const body = req.body
            
            modificaLivro(body, id)
            res.send("Item modificado com sucesso")
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }

    function destroyBook(req, res) {
        try {
            const id = req.params.id
            console.log('chamou o controller');
            
            deletaLivro(id)
            res.send("Livro foi excluído")
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }
    
module.exports = {
    getLivros, 
    getLivro, 
    createBook, 
    patchLivro,
    destroyBook
}
