const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-db', ['users']);


router.get('/users', (req, res, next) => {
    db.users.find((err, user) => {
        if (err) return next(err);
        res.json(user);
    });
});

router.get('/users/:id', (req, res, next) => {
    db.users.findOne({_id: req.params.id},(err, user) => {
        if (err) return next(err);
        res.json(user);
    });
});

router.post('/users', (req, res, next) => {
    const user = req.body;
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