const { Client, Intents, Collection } = require('discord.js');
const config = require('./config.json');
const fs = require('fs');

const handleCommand = require('./helpers/command');
const handleMessageComponents = require('./helpers/message-component');
const handleMessage = require('./helpers/message');

const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES, 
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ] 
});

// commands
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// include files in the colection
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}


// lanch the bot
client.once('ready', () => {
    console.log("je suis pret !");
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;


    if (message.content.toLocaleLowerCase().includes("bite"))
        return message.reply("8===D:sweat_drops::sweat_drops::sweat_drops::sweat_drops::sweat_drops:")

    console.log(message);


    console.log(`The message be posted by ${message.author.username}`);
    console.log(`The content is : ${message.content}`);
})

client.on('interactionCreate', interaction => {
    if (interaction.isCommand())
        handleCommand(client, interaction)
    if (interaction.isMessageComponent()) 
        handleMessageComponents(client, interaction);

});



client.login(config.discord_bot_token);
