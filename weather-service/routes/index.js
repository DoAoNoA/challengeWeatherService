const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send('Hola Buen dia!!!');
});

module.exports = router;