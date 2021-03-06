const { Client, Intents, Collection } = require('discord.js');
const fs = require('fs');

const handleCommand = require('./src/bot/helpers/command');
const handleMessageComponents = require('./src/bot/helpers/message-component');
const handleMessage = require('./src/bot/helpers/message');
const messageDetector = require('./src/bot/messageDetector');

const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES, 
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ] 


});

// commands
client.commands = new Collection();
const commandFiles = fs.readdirSync('./src/bot/commands').filter(file => file.endsWith('.js'));

// include files in the colection
for (const file of commandFiles) {
    const command = require(`./src/bot/commands/${file}`);
    client.commands.set(command.data.name, command);
}


// lanch the bot
client.once('ready', () => {
    messageDetector.refresh(() => {
        console.log("the discord Bot is ready !");
    });
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    if (message.content.toLocaleLowerCase().includes("bite"))
        return message.reply("8===D:sweat_drops::sweat_drops::sweat_drops::sweat_drops::sweat_drops:")


    messageDetector.filter(message);

    /*console.log(`The message be posted by ${message.author.username}`);
    console.log(`The content is : ${message.content}`);
    */ 
})

client.on('interactionCreate', interaction => {
    if (interaction.isCommand())
        handleCommand(client, interaction)
    if (interaction.isMessageComponent()) 
        handleMessageComponents(client, interaction);

});

client.login(process.env.DISCORD_BOT_TOKEN);

// the server
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const utils = require("./src/api/utils");

// server config
app.use("/", express.static("public"));
app.use("/", express.static("dist"));

app.use(express.json());
app.use(cookieParser());

// security 
app.use("/api/admin/*", (req, res, next) => {
    utils.findUserFromToken(req, 
        (isValid, person) => {

            if(isValid && person.isAdmin) {
                req.person = person;

                next();
            } else {
                res.status(401).send({
                    error: "invalid token"
                })
            }
        })
});

app.use("/api/user/*", (req, res, next) => {
    utils.findUserFromToken(req, 
        (isValid, person) => {

            if(isValid) {
                req.person = person;

                next();
            } else {
                console.log("The user try to connect with an invalid token");
                res.status(401).send({
                    error: "invalid token"
                })
            }
        })
});

// include the api
const apiRouter = require("./src/api/api");

app.use("/api", apiRouter);

app.get("/*", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

let port = process.env.API_PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});