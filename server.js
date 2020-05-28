const express=require('express');
const mongoose =require('mongoose');
const app =express();
const PORT = process.env.PORT || 3000; /****I am different****/
const db = mongoose.connection;
const Todo = require('./models/todo.js')
const methodOverride = require('method-override')
const todoController = require('./controllers/todo.js')
require('dotenv').config()
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/assessment2' /****I am different****/


 /* Middleware */
 app.use(express.urlencoded({extended: true}));
 app.use(methodOverride('_method'))
 app.use(express.static('public'));
 app.set('view engine', 'jsx');
 app.engine('jsx', require('express-react-views').createEngine());
 
 
//controller
app.use('/todo', todoController)

mongoose.connect(MONGODB_URI, {useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true})/****I am different****/

db.on('open', ()=> {console.log('Mongo works')})

app.listen(PORT, ()=> {
    console.log('I am connected')
})