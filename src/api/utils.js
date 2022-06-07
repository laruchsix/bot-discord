
/*
 * ******************************************
 * **************** Requires ****************
 * ******************************************
 */

const crypto = require('crypto');
const Buffer = require('buffer').Buffer;

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

const isValidToken = async (req) => {
    let token = req.cookies.token;
    let sqlRequest = {
        text : "SELECT * FROM token WHERE token = ($1) AND expired_date > ($2);",
        values: [token.id, new Date()]
    }

    let result = await requestManager.RequestAsync(sqlRequest);

    if (result.error || result.result.rows.length === 0) {
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



