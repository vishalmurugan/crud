/** This file is used to decalre the modal schema details with column name ,type etc */

const database = require('./../config/database');
const { DataTypes } = require("sequelize");

//To create books table or modal
const books = database.define('books',{
    id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true},
    title:{type:DataTypes.STRING, allowNull: false},
    author:{type:DataTypes.STRING, allowNull: false},
    description:{type:DataTypes.STRING(1234), allowNull: false},
    year:{type:DataTypes.STRING, allowNull: false},
    isbn:{type:DataTypes.STRING, allowNull: false,unique:true}
});

module.exports=books;