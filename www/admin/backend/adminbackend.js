var database = require('./database');
module.exports = {};

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
                //console.log("/vote/" + uid + "/" + dir + " - ", result);
            }
            rtn.ready = true;
            res.json(rtn);
        }
        database.query('SELECT DISTINCT * FROM `quiz`  AS q JOIN `question` as n on q.quizid = n.quizid JOIN `answer` as a WHERE q.quizid = "quiz1";', [uid], quizquery);



};


module.exports.getquizzes = function(req, res){
var rtn = {};
        function getquizzes(err, result, fields) {
            rtn.db_result = result;
            if (err)
                rtn.error = err;
            rtn.ready = true;
            res.json(rtn);
        }
        database.query('SELECT * FROM `quiz`;', getquizzes);



};
