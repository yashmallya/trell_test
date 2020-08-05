const express = require('express');
const app = express();
const db = require('./db');

const route = require('./route');


app.use(route);




app.listen(4000,function(){
	console.log('listening');
});

