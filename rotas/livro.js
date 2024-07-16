const { Router } = require("express");
const { getLivros, getLivro, createBook } = require('../controllers/livro')

const router = Router();

router.get('/', getLivros);

router.get('/:id', getLivro);

router.post('/', createBook);

router.patch('/', (req, res) =>{
    res.send('Você atualizou o livro');
});

router.delete('/', (req, res) =>{
    res.send('Você deletou o livro');
})

module.exports = router;
