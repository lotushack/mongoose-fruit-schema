var express = require('express');
var bodyParser = require('body-parser');
var mustache = require('mustache-express');
var { getAllFruits, addNewFruit } = require('./dal');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = express();

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')

// set up bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app.use(express.static('public'))

//routes
app.get('/', (req, res) =>{
  getAllFruits().then(function(fruit) {
  console.log("fruits", fruit);
      res.json(fruit)
    })
})

app.post('/fruits', function(req, res) {
   addNewFruit(req.body).then(newFruit => {
      return res.json(newFruit)
   })
})


app.listen(3000, function(){
  console.log('Lets get this porty started');
})
