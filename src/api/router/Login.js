const express = require('express');
const router = express.Router();
const utils = require("../utils");
const requestManager = require("../database/databaseRequest");
const moment = require("moment");

router.delete("/logout", async (req, res) => {
    console.log(req.cookies)
    if (req.cookies.token === undefined) {
        res.send({
            message: "You are not logged in"
        });
    } else {
        utils.removeToken(req.cookies.token.id, (isDileted) => {
           console.log(isDileted  ? "The token has been deleted !" : "The token has not been deleted !");
        });

        res.clearCookie("token");
        res.send({
            message: "You are now logged out"
        });
    }
});

router.get("/cookie", (req, res) => {
    if (req.cookies) {
        utils.isValidToken(req, 
            (isValid) => {
                if (isValid) {
                    console.log("The cookie is valid");
                    res.send({ token : req.cookies.token });            
                } else {
                    console.log("The cookie is not valid");
                    res.clearCookie("token");
                    res.send({ token : undefined });
                }
            });
    }
    else {
        res.send({ token : undefined });
    }
});

/**
 * 
 * @param {Object} user
 * @param {express.Response} res
 */
 makeTokenAndConenct = async (user, res) => {
    let now = new Date();
    let expirationDate = new Date(now.getTime() + (process.env.TOKEN_DURATION_IN_SECONDS * 1000));
    expirationDate = moment(expirationDate).format('YYYY-MM-DD HH:mm:ss');
    generatedId = await utils.randomString(64);

    requestManager.RequestCallback(
        `INSERT INTO Token (id, userId, expirationTime) VALUES ('${generatedId}', ${user.id}, '${expirationDate}');`,
        (err, result) => {
            if (err) {
                if (err.code === "ER_DUP_ENTRY")
                    makeTokenAndConenct(user, res);
                else
                    throw err;
            } else {
                let token = {
                    id: generatedId,
                    username: user.username,
                    isAdmin: user.isAdmin === 1 ? true : false
                };


                res.cookie("token", token);
                res.send({
                    message: "The token have been entered into the database"
                })
            }
        } );

}

router.post("/login", async (req, res) => {
    let {username, password} = req.body;

    if (!username || !password) {
        res.send({
            error : 'You must send a username and a password !'
        })
        return;
    }
 
    // make the connection
    requestManager.RequestCallback(
        `SELECT * FROM Users WHERE username='${username}';`,
        async (err, result) => {
            if (err) {
                throw err;
            }

            if (result.length === 0) {
                res.send({
                    error : "Invalid username !"
                })
            } else {
                //console.log(result[0].salt);

                let { value } = await utils.encode_password(password, result[0].salt);

                if (value === result[0].password) {
                    makeTokenAndConenct(result[0], res);
                } else {
                    res.send({
                        error : "Invalid password !"
                    })
                }
            }
        });
});



module.exports = router;