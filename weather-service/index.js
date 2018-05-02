const express = require('express');
const path = require('path');
const cors = require('cors');
//const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');
const citiesRoutes = require('./routes/cities');

const app = express();


//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
//app.use(indexRoutes);
app.use('/api', usersRoutes);
app.use('/api', citiesRoutes);

//static files
app.use(express.static(path.join(__dirname, 'dist')));

//start server
app.listen(3003, () => {
    console .log('Server on port 3003');
});