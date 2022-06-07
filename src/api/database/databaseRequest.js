const pool = require("./database");

module.exports = {
    basicRequest: (sqlRequest, res) => {
        pool.query(sqlRequest, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send({
                    error: err
                });
                return;
            }
            res.send(result.rows);
        });
    },
    RequestCallback : (sqlRequest, callback) => {
        pool.query(sqlRequest, callback);
    },
    /*RequestAsync : async (sqlRequest) => {
        try{
            const res = await pool.query(sqlRequest);
            return {result : res};
        } catch(err) {
            return {error : err};
        }
    }*/
}