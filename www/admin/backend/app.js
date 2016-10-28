var express = require('express');
var app = express();
var database = require('./database');
var fs = require('fs');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://greenyourresidence.ece.iastate.edu');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
app.use(allowCrossDomain);

// Test Case: If server is running, it will print Hello World
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//View Quizzes and their questions
app.get('/QuizControllerDB', require('./adminbackend'));

app.get('/QuizController', function(req, res){
  console.log('QuizController')
  var rtn = {};//init an object to return
  rtn.quiz = JSON.parse(fs.readFileSync('sample_questions.json'));
  rtn.message = "why don't you challenge yourself with a fun quiz?"

//return the object in json format.
  res.json(rtn);
});

//View Quizzes
app.get('/QuizViewerDB', require('./adminbackend').getquizzes);

app.get('/QuizViewer', function(req, res){
  console.log('QuizViewer')
  var rtn = {};//init an object to return
  rtn.quiz = JSON.parse(fs.readFileSync('sample_quiz.json'));

//return the object in json format.
  res.json(rtn);
});

//View Information
app.get('/InformationViewerDB', require('./adminbackend'));

app.get('/InformationViewer', function(req, res){
  console.log('InformationViewer')
  var rtn = {};//init an object to return
  rtn.quiz = JSON.parse(fs.readFileSync('sample_information.json'));

//return the object in json format.
  res.json(rtn);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
