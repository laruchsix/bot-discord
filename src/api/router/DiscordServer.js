const express = require("express");
const router = express.Router();
const requestManager = require("../database/databaseRequest");

router.get("/user/discordserver/", (req, res) => {
    let {person} = req;

    if (!person || !person.id) {
        return res.status(401).send({
            error: "invalid token"
        });
    }        

    let sqlRequest = 
        `SELECT DISTINCT DiscordServer.name AS label, DiscordServer.id AS value 
        FROM DiscordServer, Subscribes, Users 
        WHERE Users.id = ${req.person.id} 
        AND Users.id = Subscribes.userId 
        AND DiscordServer.id = Subscribes.discordServerId;`;

    //console.log(sqlRequest);

    requestManager.RequestCallback(sqlRequest, (err, result) => {
        if (err) {
            console.log(err);
            res.send({
                error: "error while make the request to the database"
            })
        }

        res.send(result);
    });
});

module.exports = router;
