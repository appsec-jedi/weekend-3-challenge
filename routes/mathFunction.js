var express = require('express');
var router = express.Router();

var result = 0;


router.post('/add', function(req,res){
  result = Number(req.body.X) + Number(req.body.Y);
  res.send({mathResult: result});
});
router.post('/subtract', function(req,res){
  result = Number(req.body.X) - Number(req.body.Y);
  res.send({mathResult: result});
});
router.post('/divide', function(req,res){
  result = Number(req.body.X) / Number(req.body.Y);
  res.send({mathResult: result});
});
router.post('/multiply', function(req,res){
  result = Number(req.body.X) * Number(req.body.Y);
  res.send({mathResult: result});
});

module.exports = router;
