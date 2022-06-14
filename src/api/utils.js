
/*
 * ******************************************
 * **************** Requires ****************
 * ******************************************
 */

const crypto = require('crypto');
const Buffer = require('buffer').Buffer;

const requestManager = require("./database/databaseRequest");
const moment = require("moment");

/*
 * *******************************************
 * **************** Functions ****************
 * *******************************************
 */

/*
 * function genreate a random string
 *
 * @param len : integer
 *          len of the string returned
 *
 * @param an : string 
 *
 * return : string
 *          return a random string with letter and digits
 */
function randomString (len, an) {
    an = an && an.toLowerCase();
    var str = "", i = 0, min = an == "a" ? 10 : 0, max = an == "n" ? 10 : 62;
    for (; i++ < len;) {
        var r = Math.random() * (max - min) + min << 0;
        str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48);
    }
    return str;
}

module.exports = {
    randomString,
    /*
     * function encode a password like keycloak do
     *
     * @param new_password : string
     *          new password passed by the user
     *
     * return : string
     *         the JSON object with encoded password and salt in base 64 
     */
    encode_password: async function (new_password, salt) {
        const my_salt = salt ? salt : await randomString(16);
        const my_salt_64 = Buffer.from(my_salt, 'utf8').toString('base64');

        const hash = crypto.pbkdf2Sync(new_password, my_salt, 27500, 64, 'sha256');

        return {
            value: hash.toString('base64'),
            salt: my_salt 
        };
    },
    /*
    * fucntion check if the token is valid or not
    *
    * @param req : the http request
    * 
    * return : boolean
    *       true if the token is valid, false otherwise
    */
    isValidToken: (req, callback) => {
        let token = req.cookies.token;

        // if the token doesn't exist
        if (!token) {
            console.log("the token don't exist");
            return callback(false);
        }

        // make the request to the database
        expirationDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        let sqlRequest = `SELECT * FROM Token WHERE id = '${token.id}' AND expirationTime > '${expirationDate}';`;
    
        requestManager.RequestCallback(sqlRequest,
            (err, result) => {
                if (err) {
                    console.log("error :" + err);
                    return callback(false);
                } else {
                    return callback(result.length !== 0);
                }
            });
    
    },
    isValidAdmin: async (req) => {
        let token = req.cookies.token;
        let expirationDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        let sqlRequest = "SELECT * FROM Token, Users " +
                "WHERE Users.id = Token.userId " +
                `AND Token.id = '${token.id}' ` +
                `AND expired_date > '${expirationDate}' ` +
                "AND Users.isAdmin = 1;";
        
    
        requestManager.RequestAsync(sqlRequest,
            (err, result) => {
                if (err || result.length === 0) {
                    return false;
                } else {
                    return true;
                }
            });
    },
    /**
     * 
     * @param {string} tokenId 
     * @param {function} callback 
     */
    removeToken: (tokenId, callback) => {
        expirationDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        let sqlRequest = `DELETE FROM Token WHERE id = '${tokenId}' AND expirationTime > '${expirationDate}';`;
    
        requestManager.RequestCallback(sqlRequest, 
            (err, result) => {
                if (err) {
                    console.log(err);
                    callback(false);
                } else {
                    callback(true);
                }            
            });
    }
}


/*const verifyParamArray = (params, names, res) => {
    for (let i = 0; i < params.length; i++) {
        if (params[i] === undefined && params[i] === "") {
            res.status(400).send({
                error: "missing parameter ${names[i]}"
            });
            return false;
        }
    }
}

const getUserTokenByUsername = (userName) => {
    let sqlRequest = {
        name: "read-token-"+userName,
        text: 'SELECT * FROM token JOIN (SELECT id FROM person WHERE name = ($1)) ON token.personId = ;',
        values: [userName]
    }

    return requestManager.RequestAsync(sqlRequest);
}

const removeToken = async (tokenId) => {
    let sqlRequest = {
        text : "DELETE FROM token WHERE token = ($1);",
        values: [tokenId]
    }

    let result = await requestManager.RequestAsync(sqlRequest);

    if (result.error) {
        return false;
    } else {
        return true;
    }
};



const isValidAdmin = async (req) => {
    let token = req.cookies.token;
    let sqlRequest = {
        text : "SELECT * FROM token, person " +
            "WHERE person.id = token.person_id " +
            "AND token.token = ($1) " +
            "AND expired_date > ($2)" +
            "AND person.admin = true;",
        values: [token.id, new Date()]
    }

    let result = await requestManager.RequestAsync(sqlRequest);
    if (result.error || result.result.rows.length === 0) {
        return false;
    } else {
        return true;
    }
};
*/



