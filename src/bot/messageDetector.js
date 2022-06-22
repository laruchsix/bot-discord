const requestManager = require("../api/database/databaseRequest");

var isInit = false; 
var treeFilter = [];

refresh = (callback) => {
    let sqlRequest = 
        `SELECT * FROM Detector WHERE discordServerId = 1;`;

    requestManager.RequestCallback(sqlRequest,
        (err, result) => {

            if(err) {
                console.log(err);
            } else {
                treeFilter = result;
                isInit = true;
                if (callback) {
                    callback();
                }
            }
        }        
    );
}

module.exports = {
    filter : (message, client) => {
        if (!isInit) {
            refresh();
        }


        for (var i = 0; i < treeFilter.length; i++) {
            if (message.content.toLocaleLowerCase().includes(treeFilter[i].word)) {
                if (treeFilter[i].responseType === "react") {
                    // TODO finir
                    message.react(treeFilter[i].response);
                } else {
                    message.reply(treeFilter[i].response);
                }
            }
        }
    },
    refresh
}