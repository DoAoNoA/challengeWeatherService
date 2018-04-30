const router = require('express').Router();
//const mongojs = require('mongojs');
//const db = mongojs('mean-db', ['users']);

var cities = [
    {city:"nome", region:"ak"},
    {city:"dallas", region:"tx"},
    {city:"chicago", region:"il"}
  ];

router.get('/cities', (req, res, next) => {
    res.json(cities);
});

module.exports = router;