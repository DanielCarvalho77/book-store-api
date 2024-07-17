const { Router } = require("express");
const { getLivros, getLivro, createBook, patchLivro, destroyBook } = require('../controllers/livro')

const router = Router();

router.get('/', getLivros);

router.get('/:id', getLivro);

router.post('/', createBook);

router.patch('/:id', patchLivro);

router.delete('/:id', destroyBook)

module.exports = router;
