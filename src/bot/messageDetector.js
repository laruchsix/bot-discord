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
    filter : (message) => {
        if (!isInit) {
            refresh();
        }

        console.log(treeFilter);

        for (var i = 0; i < treeFilter.length; i++) {
            if (message.content.toLocaleLowerCase().includes(treeFilter[i].word)) {
                message.reply(treeFilter[i].response);
            }
        }
    },
    refresh
}