const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 3000;

//init app
const app = express();

const url = 'mongodb://admin:admin@ds233500.mlab.com:33500/todoapp';


//Body Parser Middleware
app.use(bodyParser.json());    
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')))

//view setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//connect to mongodb
mongoose.connect(process.env.MONGODB_URI || url).then(()=>{
  console.log("connected to database")
}).catch((err)=>{
  console.log("Not Connected to Database ERROR! ", err)
})

const db = mongoose.connection;

//import routes
const todo = require('./routes/todos')
 
app.use('/', todo)

app.listen(port,()=>{
    console.log('Server started on port ' + port)
})