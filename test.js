const bd = require("./src/api/database/databaseRequest");
const utils = require("./src/api/utils");


(async () => {
    const { value, salt } = await utils.encode_password("trucherbotdiscord");

    console.log(value);
    console.log(salt);
    bd.RequestCallback(
        "INSERT INTO Users (username, password, salt, isAdmin) " +
        `VALUES ('trucher', '${value}', '${salt}', 1);`,
        (err, result) => {
            if (err)
                throw err;
    
            console.log(result);
        });
})();

