const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-db', ['users']);
const axios = require('axios');

router.get('/users/:id', (req, res, next) => { 

    db.users.find({_id: mongojs.ObjectId(req.params.id)}, function (err, docs) {
        //console.log(docs[0])
        var myCities = docs[0].cities
        //console.log(myCities) 
        
        async function getWeather(myCities){
            const promises = myCities.map(async city => {
                const myCity = city.name; 
                const response = await axios.get(`http://localhost:3000/${myCity}`);
            
                return response.data
            })

            const results = await Promise.all(promises)
            return results
        }
        
        getWeather(myCities)
            .then((result) => res.json(result));
            
    });
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

router.post('/cities/newCity', (req, res, next) => {
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

router.delete('/cities/:name', (req, res, next) => {

    db.users.findOne({"city.name": req.params.name},(err, user) => {
        if (err) return next(err);
        db.users.remove({"city.name": req.params.name}, (err, result ) => {
            if (err) return next(err);
            res.json(result);
        }); 
    });      
});

module.exports = router;