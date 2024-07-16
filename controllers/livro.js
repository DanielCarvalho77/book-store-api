const { getTodosLivros, getLivrosPorId, insertNewBook } = require("../services/livro");


function getLivros(req, res){
        try {
            const livros = getTodosLivros();
            
            res.send(livros);
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }

    function getLivro(req, res){
        try {
            const { id } = req.params;
            const livro = getLivrosPorId(id);
            console.log(livro);

            if (!livro.length) {
                return  res.status(500).send({ message: error.message });
            }
            
            res.send(livro);
        } catch (error) {
            res.status(500);
            res.send(error.message);
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
    
module.exports = {
    getLivros, getLivro, createBook
}
