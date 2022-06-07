const express = require("express");
const router = express.Router();
const requestManager = require("../database/databaseRequest");

//get all inscription in a manche in a planning
router.get("/subscribe/:idM/:idP", (req, res) => {
    const subs = req.params;
    if (subs.idM === undefined || subs.idP === undefined) {
        res.status(400).send({
            error: "require the planning id and the the manche id"
        });
    }

    let sqlRequest = {
        name: "read-subscribe",
        text: 'SELECT * FROM inscription INNER JOIN person ON person.id = inscription.person_id WHERE planning_id = ($1) AND manche_id = ($2);',
        values: [subs.idP, subs.idM]
    }

    requestManager.basicRequest(sqlRequest, res);
});

//to add a person a manche in a planning with the token id
router.post("/user/subscribe/:idM/:idP/:idT", (req, res) => {
    const subs = req.params;
    let sqlRequest = {
        text: 'insert into inscription (planning_id, manche_id, person_id)' +
            'VALUES ($1, $2, (SELECT person_id FROM token WHERE token.token = $3));',
        values: [subs.idP, subs.idM, subs.idT]
    }
    requestManager.RequestCallback(sqlRequest, (err, result) => {
        if(err){
            return;
        }
        let sqlRequest = {
            name: "read-subscribe",
            text: 'SELECT * FROM inscription INNER JOIN person ON person.id = inscription.person_id WHERE planning_id = ($1) AND manche_id = ($2);',
            values: [subs.idP, subs.idM]
        }
        requestManager.basicRequest(sqlRequest, res);
    })
})

//to add a person a manche in a planning with the person id
router.post("/userBis/subscribe/:idM/:idP/:idT", (req, res) => {
    const subs = req.params;
    let sqlRequest = {
        text: 'insert into inscription (planning_id, manche_id, person_id)' +
            'VALUES ($1, $2, $3);',
        values: [subs.idP, subs.idM, subs.idT]
    }
    requestManager.RequestCallback(sqlRequest, (err, result) => {
        if(err){
            return;
        }
        let sqlRequest = {
            name: "read-subscribe",
            text: 'SELECT * FROM inscription INNER JOIN person ON person.id = inscription.person_id WHERE planning_id = ($1) AND manche_id = ($2);',
            values: [subs.idP, subs.idM]
        }
        requestManager.basicRequest(sqlRequest, res);
    })
})

router.get("/subscribe/users/:idM/:idP", (req, res) => {
    const subs = req.params;
    if (subs.idM === undefined || subs.idP === undefined) {
        res.status(400).send({
            error: "require the planning id and the the manche id"
        });
    }

    let sqlRequest = {
        name: "read-subscribe-users",
        text: 'SELECT * FROM person WHERE person.id not in (select inscription.person_id from inscription WHERE planning_id = ($1) AND manche_id = ($2));',
        values: [subs.idP, subs.idM]
    }

    requestManager.basicRequest(sqlRequest, res);
});

//delete a person from a manche from a planning
router.delete("/admin/subscribe/:idP/:idM/:id", (req, res) => {
    const subs = req.params;
    let sqlRequest = {
        text: 'DELETE FROM inscription WHERE inscription.person_id = ($1);',
        values: [subs.id]
    }
    requestManager.RequestCallback(sqlRequest, (err, result) => {
        if(err){
            res.status(403).send({
                error :err
            });
            return;
        }
        let sqlRequest = {
            name: "read-subscribe",
            text: 'SELECT * FROM inscription INNER JOIN person ON person.id = inscription.person_id WHERE planning_id = ($1) AND manche_id = ($2);',
            values: [subs.idP, subs.idM]
        }
        requestManager.basicRequest(sqlRequest, res);
    })
})

module.exports = router;