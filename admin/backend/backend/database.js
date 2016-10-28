module.exports = {};

var mysql = require("mysql");
var fs = require("fs");
// First you need to create a connection to the db
var con = mysql.createConnection(JSON.parse(fs.readFileSync('mysql_info.json')));

con.connect(function(err){
  if(err){
    console.log('[Database]: Error connecting to Db');
    return;
  }
  console.log('[Database]: Connection established');
});

/**
 * Usage queryText="SELECT * FROM...." & func = function(err, rows){}
 */
function query(queryText, args, func){
  con.query(queryText, args, func);
}

function close() {

  con.end(function(err) {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
  });
}

module.exports.query = query;
module.exports.close = close;
