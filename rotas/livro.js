const { Router } = require("express");

const router = Router();

router.get('/', (req, res) =>{
    res.send("Talvez dê certo");
});

module.exports = router;
