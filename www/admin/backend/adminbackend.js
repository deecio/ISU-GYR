var database = require('./database');
module.exports = {};

//Home
module.exports.addhomeitem = function(req,res){
  var rtn = {};
          function addhomeitem(err, result, fields) {
              rtn.db_result = result;
              if (err)
                  rtn.error = err;
                  if (result.changedRows < 1) {
                      rtn.error = {
                          code: 1001,
                          message: 'failed to add object'
                      }
                  }
              rtn.ready = true;
              res.json(rtn);
          }
          database.query('INSERT INTO `object`(`name`, `image`, `category`, `tooltip`, `hyperlink`) VALUES (?,?,?,?,?);', [req.body.name || "null", req.body.image || "null", req.body.category || "null", req.body.tooltip || "null", req.body.hyperlink || "null"], addhomeitem);

};

module.exports.gethomeitems = function(req,res){
  var rtn = {};
          function gethomeitems(err, result, fields) {
              rtn.db_result = result;
              if (err)
                  rtn.error = err;
              rtn.ready = true;
              res.json(rtn);
          }
          database.query('SELECT `name`, `image`, `category`, `tooltip`, `hyperlink` FROM `object`;', gethomeitems);

};

module.exports.deletehomeitem = function(req,res){
  var rtn = {};
          function deletehomeitem(err, result, fields) {
              rtn.db_result = result;
              if (err)
                  rtn.error = err;
                  if (result.changedRows < 1) {
                      rtn.error = {
                          code: 1001,
                          message: 'failed to delete question'
                      }
                  }
              rtn.ready = true;
              res.json(rtn);
          }
          database.query('DELETE FROM `object` WHERE `tooltip` =VALUES (?);', [req.body.tooltip], deletehomeitem);

};

//Quiz

// Not used
module.exports.populatequiz = function(req, res){
var rtn = {};
        function populatequiz(err, result, fields) {
            rtn.db_result = result;
            if (err)
                rtn.error = err;
            if (result.changedRows < 1) {
                rtn.error = {
                    code: 1001,
                    message: 'failed to retrieve quiz information'
                }
            }
            rtn.ready = true;
            res.json(rtn);
        }
        database.query('SELECT DISTINCT * FROM `question`;', populatequiz);



};


module.exports.getquestions = function(req, res){
var rtn = {};
        function getquestions(err, result, fields) {
            rtn.db_result = result;
            if (err)
                rtn.error = err;
            rtn.ready = true;
            res.json(rtn);
        }
        database.query('SELECT * FROM `question` ORDER BY `question`.`category` ASC;', getquestions);



};

// Not used
module.exports.showquizzes = function(req, res){
var rtn = {};
        function showquizzes(err, result, fields) {
            rtn.db_result = result;
            if (err)
                rtn.error = err;
            rtn.ready = true;
            res.json(rtn);
        }
        database.query('SELECT q.`quizid`, n.`label`, n.`qid`, n.`type` FROM `quiz` as q JOIN `question` as n WHERE n.`quizid` = q.`quizid`;', showquizzes);

};

module.exports.addquestionDB = function(req,res){
  var rtn = {};
          function addquestionDB(err, result, fields) {
              rtn.db_result = result;
              if (err)
                  rtn.error = err;
                  if (result.changedRows < 1) {
                      rtn.error = {
                          code: 1001,
                          message: 'failed to add question'
                      }
                  }
              rtn.ready = true;
              res.json(rtn);
          }
          database.query('INSERT INTO `question`(`quizid`, `type`, `label`, `category`) VALUES (?,?,?,?);', [req.body.quizid || "null", req.body.type || "null", req.body.label || "null", req.body.category || "null"], addquestionDB);

};

module.exports.deletequestion = function(req,res){
  var rtn = {};
          function deletequestion(err, result, fields) {
              rtn.db_result = result;
              if (err)
                  rtn.error = err;
                  if (result.changedRows < 1) {
                      rtn.error = {
                          code: 1001,
                          message: 'failed to delete question'
                      }
                  }
              rtn.ready = true;
              res.json(rtn);
          }
          database.query('DELETE FROM `question` WHERE `label` =VALUES (?);', [req.body.label], deletequestion);

};

//Shopping Cart
module.exports.additem = function(req,res){
      var rtn = {};
          function additem(err, result, fields) {
              rtn.db_result = result;
              if (err){
                  rtn.error = err;
                  console.log(err);
                }
                  if (result.changedRows < 1) {
                      rtn.error = {
                          code: 1001,
                          message: 'failed to add item'
                      }
                  }
              rtn.ready = true;
              res.json(rtn);
          }
          database.query('INSERT INTO `item`(`name`, `image`, `icon_height`, `monthly_cost`, `eStar`, `object`, `type`, `category`) VALUES (?,?,?,?,?,?,?,?);', [req.body.name || "null", req.body.image || "null", req.body.icon_height || "null", req.body.monthly_cost || "null", req.body.eStar || "null",  req.body.object || "null", req.body.type || "null", req.body.category || "null"], additem);

};

module.exports.getshoppingcart = function(req,res){
  var rtn = {};
          function getshoppingcart(err, result, fields) {
              rtn.db_result = result;
              if (err)
                  rtn.error = err;
              rtn.ready = true;
              res.json(rtn);
          }
          database.query('SELECT * FROM `item`;', getshoppingcart);

};

module.exports.deleteitem = function(req,res){
  var rtn = {};
          function deleteitem(err, result, fields) {
              rtn.db_result = result;
              if (err)
                  rtn.error = err;
                  if (result.changedRows < 1) {
                      rtn.error = {
                          code: 1001,
                          message: 'failed to delete item'
                      }
                  }
              rtn.ready = true;
              res.json(rtn);
          }
          database.query('DELETE FROM `item` WHERE `name` = VALUES (?);', [req.body.name], deleteitem);

};

//Information
module.exports.getinformation = function(req,res){
  var rtn = {};
          function getinformation(err, result, fields) {
              rtn.db_result = result;
              if (err)
                  rtn.error = err;
              rtn.ready = true;
              res.json(rtn);
          }
          database.query('SELECT * FROM `information`;', getinformation);

};

module.exports.addinformation = function(req,res){
  var rtn = {};
          function addinformation(err, result, fields) {
              rtn.db_result = result;
              if (err){
                  rtn.error = err;
                  console.log(err);
                }
                  if (result.changedRows < 1) {
                      rtn.error = {
                          code: 1001,
                          message: 'failed to add information'
                      }
                  }
              rtn.ready = true;
              res.json(rtn);
          }
          database.query('INSERT INTO `information`(`title`, `hyperlink`, `category`) VALUES (?,?,?);', [req.body.title || "null", req.body.info_link || "null", req.body.category || "null"], addinformation);

};

module.exports.deleteinformation = function(req,res){
  var rtn = {};
          function deleteinformation(err, result, fields) {
              rtn.db_result = result;
              if (err)
                  rtn.error = err;
                  if (result.changedRows < 1) {
                      rtn.error = {
                          code: 1001,
                          message: 'failed to delete information'
                      }
                  }
              rtn.ready = true;
              res.json(rtn);
          }
          database.query('DELETE FROM `information` WHERE `title` = VALUES (?);', [req.body.title], deleteinformation);

};

//Facts
module.exports.getfacts = function(req,res){
  var rtn = {};
          function getfacts(err, result, fields) {
              rtn.db_result = result;
              if (err)
                  rtn.error = err;
              rtn.ready = true;
              res.json(rtn);
          }
          database.query('SELECT * FROM `fact`;', getfacts);

};

module.exports.addfact = function(req,res){
  var rtn = {};
          function addfact(err, result, fields) {
              rtn.db_result = result;
              if (err)
                  rtn.error = err;
                  if (result.changedRows < 1) {
                      rtn.error = {
                          code: 1001,
                          message: 'failed to add fact'
                      }
                  }
              rtn.ready = true;
              res.json(rtn);
          }
          database.query('INSERT INTO `fact`(`name`, `text`, `category`, `hyperlink`, `image`) VALUES (?,?,?,?,?);', [req.body.name || "null", req.body.text || "null", req.body.category || "null", req.body.hyperlink || "null", req.body.image || "null"], addfact);

};

module.exports.deletefact = function(req,res){
  var rtn = {};
          function deletefact(err, result, fields) {
              rtn.db_result = result;
              if (err)
                  rtn.error = err;
                  if (result.changedRows < 1) {
                      rtn.error = {
                          code: 1001,
                          message: 'failed to delete fact'
                      }
                  }
              rtn.ready = true;
              res.json(rtn);
          }
          database.query('DELETE FROM `fact` WHERE `text` = VALUES (?);', [req.body.text], deletefact);

};
