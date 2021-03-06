var express = require('express');
var app = express();
var database = require('./database');
var fs = require('fs');
var adminbackend = require('./adminbackend');
var bodyParser = require('body-parser');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://greenyourresidence.ece.iastate.edu');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json({
  type: 'application/json'
}));
app.use(bodyParser.text({
  type: 'text/plain'
}));

// Test Case: If server is running, it will print Hello World
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//View Quizzes and their questions
app.get('/QuizControllerDB', adminbackend.populatequiz);

app.get('/QuizController', function(req, res){
  console.log('QuizController')
  var rtn = {};//init an object to return
  rtn.quiz = JSON.parse(fs.readFileSync('sample_questions.json'));

//return the object in json format.
  res.json(rtn);
});

//View Questions
app.get('/QuestionViewerDB', adminbackend.getquestions);
app.post('/AddQuestionDB', adminbackend.addquestionDB);
app.post('/DeleteQuestion', adminbackend.deletequestion);

app.get('/QuizViewer', function(req, res){
  console.log('QuizViewer')
  var rtn = {};//init an object to return
  rtn.quiz = JSON.parse(fs.readFileSync('sample_quiz.json'));

//return the object in json format.
  res.json(rtn);
});

//Home
app.get('/HomeViewerDB', adminbackend.gethomeitems);
app.post('/AddHomeItem', adminbackend.addhomeitem);
app.post('/DeleteHomeItem', adminbackend.deletehomeitem);

//Shopping Cart
app.get('/ShoppingCartViewerDB', adminbackend.getshoppingcart);
app.post('/AddItemDB', adminbackend.additem);
app.post('/DeleteItem', adminbackend.deleteitem);

//Information
app.get('/InformationViewerDB', adminbackend.getinformation);
app.post('/AddInformationDB', adminbackend.addinformation);
app.post('/DeleteInformation', adminbackend.deleteinformation);

app.get('/InformationViewer', function(req, res){
  console.log('InformationViewer')
  var rtn = {};//init an object to return
  rtn.information = JSON.parse(fs.readFileSync('sample_information.json'));
//return the object in json format.
  res.json(rtn);
});

//Facts
app.post('/AddFactDB', adminbackend.addfact);
app.get('/FactViewerDB', adminbackend.getfacts);
app.post('/DeleteFact', adminbackend.deletefact);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
