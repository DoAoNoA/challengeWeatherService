const router = require('express').Router();
//const mongojs = require('mongojs');
//const db = mongojs('mean-db', ['users']);

var cities = [
    {name:"nome", region:"ak"},
    {name:"dallas", region:"tx"},
    {name:"chicago", region:"il"}
  ];

router.get('/cities', (req, res, next) => {
    res.json(cities);
});

module.exports = router;