const express = require("express");
const router = express.Router();
const requestManager = require("../database/databaseRequest");

//get all manche from a planning id
router.get("/manche/:id", (req, res) => {
    if (req.params.id === undefined) {
        res.status(400).send({
            error: "require the planning id"
        });
    }

    let sqlRequest = {
        name: "read-manche-" + req.params.id,
        text: 'SELECT * FROM manche WHERE planning_id = ($1) ORDER BY ordre;',
        values: [req.params.id]
    }

    requestManager.basicRequest(sqlRequest, res);
});

//add a manche in a planning
router.post("/user/manche/", (req, res) => {
    const manche = req.body;
    let sqlRequest = {
        text: 'insert into manche (name, ordre, planning_id)' +
            'VALUES ($1, (select max(ordre) from manche) + 1, $2);',
        values: [manche.name, manche.planning_id]
    }
    requestManager.RequestCallback(sqlRequest, (err, result) => {
        if(err){
            console.log(err);
            res.status(403).send({
                error :err
            });
            return;
        }
        let sqlRequest = {
            name: "read-manche" + req.params.id,
            text: 'SELECT * FROM manche WHERE planning_id = ($1) ORDER BY ordre;',
            values: [manche.planning_id]
        }
        requestManager.basicRequest(sqlRequest, res);
    })
})

//delete a manche with id from a planning
router.delete("/admin/manche/:idM/:idP", (req, res) => {
    const manche = req.params;
    let sqlRequest = {
        text: 'DELETE FROM manche WHERE manche.id = ($1);',
        values: [manche.idM]
    }
    requestManager.RequestCallback(sqlRequest, (err, result) => {
        if(err){
            console.log(err);
            res.status(403).send({
                error :err
            });
            return;
        }
        let sqlRequest = {
            name: "read-manche" + req.params.id,
            text: 'SELECT * FROM manche WHERE planning_id = ($1) ORDER BY ordre;',
            values: [manche.idP]
        }
        requestManager.basicRequest(sqlRequest, res);
    })
})


module.exports = router;