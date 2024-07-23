const { Router } = require("express");
const { getFavoritos, postFavorito, deletaFavorito } = require('../controllers/favorito')

const router = Router();

router.get('/', getFavoritos);

router.get('/:id', postFavorito);

router.patch('/:id', deletaFavorito);

module.exports = router;
