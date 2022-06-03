const { Client, Intents, Collection } = require('discord.js');
const config = require('./config.json');
const fs = require('fs');

const handleCommand = require('./helpers/command');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

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

client.on('interactionCreate', async interaction => {
    if (interaction.isCommand()) handleCommand(client, interaction)

});

client.login(config.discord_bot_token);
