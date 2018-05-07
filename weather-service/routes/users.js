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
                const myRegion = city.region; 
                //const response = await axios.get(`http://localhost:3000/${myCity}`);
                const response = await axios.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${myCity}%2C%20${myRegion}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`);
                return response.data
            })

            const results = await Promise.all(promises)
            return results
        }
        
        getWeather(myCities)
            .then((result) => res.json(result));
            
    });
});

router.post('/users/:id/newCity', (req, res, next) => {
    const newObj = req.body;  

    db.users.findAndModify({query:{_id: mongojs.ObjectId(req.params.id)},
    update: {$push:{'cities': newObj}},
    new:true}, function (err, doc) {
        res.json(doc);
    });

})

router.delete('/users/:id/:delCity', (req, res, next) => {

    db.users.update(
        {_id: mongojs.ObjectId(req.params.id)},
        { $pull: { 'cities': { name: req.params.delCity } } }
    )  
});

module.exports = router;