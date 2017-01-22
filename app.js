var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mathFunction = require('./routes/mathFunction')


var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/mathFunction', mathFunction);

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});
app.get('/'), function(req,res){
  res.send()
}


app.listen(3000);
