const cors = require('cors');
const express = require('express');
const path = require('path');
const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');

const app = express();


//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(indexRoutes);
app.use('/api', usersRoutes);

//start server
app.listen(3000, () => {
    console .log('Server on port 3000');
});