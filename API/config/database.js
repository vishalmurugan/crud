/** This file is used to declare the database connection code */

const Sequelize = require('sequelize'); //ORM Library

//To create database connection with sequelize instance
const sequelize=new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
  host:process.env.DB_HOST,
  dialect:'mysql'
});

//To check the database is connected or not
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

module.exports=sequelize;