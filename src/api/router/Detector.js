const express = require("express");
const router = express.Router();
const requestManager = require("../database/databaseRequest");
const messageDetector = require("../../bot/messageDetector");

router.get("/user/detector/:id", (req, res) => {
    let sqlRequest =
        `SELECT * 
        FROM Detector 
        WHERE discordServerId = ${req.params.id};`;

    requestManager.RequestCallback(sqlRequest, 
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.send(result);
            }
    });

});

router.delete("/user/detector/:id", (req, res) => {
    let { id } = req.params;

    if (!id) {
        res.status(400).send({ error : "missing id" });
        return;
    }

    let sqlRequest =
        `DELETE FROM Detector 
        WHERE id = ${id};`;

    requestManager.RequestCallback(sqlRequest,
        (err, result) => {
            if(err) {
                console.log(err);
                res.status(500).send("Error delete detector");
                return;
            }

            console.log(result);
            res.send(result);
    });
});

router.post("/user/detector/", (req, res) => {
    const {
        dsId,
        isMulti,
        word,
        response,
        responseType,
        probability
    } = req.body;

    // if the discord server id isn't present handle an error
    if (!dsId) {
        res.status(400).send({ errorMessage : "Discord server id is required" });
        return;
    }

    // if is mutli isn't valid or no present handle an error
    if (isMulti !== false && isMulti !== true) {
        res.status(400).send({ errorMessage : "isMulti must be either true or false" });
    }

    // word is required
    if (!word) {
        res.status(400).send({ errorMessage : "Word is required" });
        return;
    }

    // response is required
    if (!response) {
        res.status(400).send({ errorMessage : "Response is required" });
        return;
    }

    // response type is required and equal to "react" or "awnser"
    if (!responseType || (responseType !== "react" && responseType !== "awnser")) {
        res.status(400).send({ errorMessage : "Response type is required and must be either react or awnser" });
        return;
    }

    // probability is required and must be a number between 0 and 100
    if (!probability || isNaN(probability) || probability < 0 || probability > 100) {
        res.status(400).send({ errorMessage : "Probability is required and must be a number between 0 and 100" });
        return;
    }

    // if all the requirements are met, insert the detector
    let sqlRequest = 
        `INSERT INTO Detector (discordServerId, isMulti, word, response, responseType, probability) 
        VALUES (${dsId}, ${isMulti}, '${word}', '${response}', '${responseType}', ${probability});`;

    requestManager.RequestCallback(sqlRequest,
        (err, result) => {
            if(err) {
                console.log(err);
                res.status(500).send("Error inserting detector");
                return;
            }

            console.log(result);
            res.send(result);

            messageDetector.refresh();
    });
});

module.exports = router;