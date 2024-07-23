const { getTodosFavoritos, deletaFavoritoPorId, insertFavoritos } = require("../services/favorito");

function getFavoritos(req, res){
    try {
        const livros = getTodosFavoritos();        
        res.send(livros);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function postFavorito (req, res ){
    try {
        const id = req.params.id
        insertFavoritos(id);        
        res.status(201);
        res.send("Livro cadastrado com sucesso!");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function deletaFavorito(req, res) {
    try {
        const id = req.params.id
        
        deletaFavoritoPorId(id)
        res.send("Favorito removido da lista")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deletaFavorito
}
