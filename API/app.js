/** The app. js file is usually the initial file to a NodeJS app */

//To set up middlewares to respond to HTTP Requests
const express = require('express');
const http = require('http');

// To handle HTTP request body
const bodyParser = require('body-parser'); 

//Import .env file
require('dotenv').config();
const port = process.env.PORT;


//Enabling Cross origin for all requests
const cors = require('cors');

/*
const sequelize= require('./modals/books');

sequelize.sync({force:true}).then(() => {
  console.log('Book table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});
*/
//To mount the app middleware
const app = express();

// http implementation
const server = http.createServer(app);

app.use(cors({
    origin: true, 
    credentials: true,
    methods: 'POST,GET,PUT,OPTIONS,DELETE' 
}));  

app.use(bodyParser.json());


app.use('/api',require('./routes/routes'));
  
app.get('/', function(req, res){
   res.send('Server Connected');
});


//server that listens on port
server.listen(port, () => console.log(`Listening on port ${port}`));


