function firstquery(err, result, fields) {
            rtn.db_result = result;
            if (err)
                rtn.error = err;
            if (result.changedRows < 1) {
                rtn.error = {
                    code: 1001,
                    message: 'failed to update votes!'
                }
                console.log("/vote/" + uid + "/" + dir + " - ", result);
            }
            rtn.ready = true;
            res.json(rtn);
        }
        database.query('UPDATE `urls` set `votes` = `votes` ' + (dir == 'up' ? '+' : '-') + ' 1 WHERE `uid` = ?;', [uid], firstquery);
