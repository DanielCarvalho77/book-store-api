const { Router } = require("express");
const { getLivros, getLivro, createBook, patchLivro } = require('../controllers/livro')

const router = Router();

router.get('/', getLivros);

router.get('/:id', getLivro);

router.post('/', createBook);

router.patch('/:id', patchLivro);

router.delete('/', (req, res) =>{
    res.send('Você deletou o livro');
})

module.exports = router;
