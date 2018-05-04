const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-db', ['users']);
const request = require('request');

router.get('/users/:id', (req, res, next) => {   
    db.users.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, doc) => {
        if (err) return next(err);
        //var userCities = doc.city;

        url = 'http://localhost:3000/nome/';
        request({url, json:true}, (err, resp, body) => {
            const path = body.query.results.channel;
            var region = (path.location.region.toLowerCase()).trim();
            var name = (path.location.city.toLowerCase()).trim();;
            var condition = path.item.condition;
            var forecast = path.item.forecast;
            
            myForecast = [{name:name, region:region, condition, forecast}, {name:name, region:region, condition, forecast}];

            res.json(myForecast);
        });
    })
});

router.get('/users', (req, res, next) => {
    console.log("weatherMyJson es: " +weatherMyJson);
    res.send(weatherMyJson);  
    /*
    db.users.find((err, user) => {
        if (err) return next(err);
        res.json(user);
    });
    */
});

router.get('/users/:id', (req, res, next) => {
    db.users.findOne({_id: req.params.id},(err, user) => {
        if (err) return next(err);
        res.json(user);
    });
});

router.post('/cities', (req, res, next) => {
    const user = req.body;
    db.users.save(user, (err, user) => {
        if (err) return next(err);
        res.json(user);
    });

    /*
    if(!user.board || !(user.city + '')){
        res.status(400).json({
            error: 'Bad Data'
        });
    }else{
        db.users.save(user, (error, task) => {
            if (err) return next(err);
            res.json(user);
        });
    }
    */
})

router.delete('/users/:id', (req, res, next) => {
    db.users.findOne({_id: req.params.id},(err, user) => {
        if (err) return next(err);
        const city = req.body;
        db.users.remove({city: 'city'}, (err, result ) => {
            if (err) return next(err);
            res.json(users);
        }); 
    });      
});

module.exports = router;