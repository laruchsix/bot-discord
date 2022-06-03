const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require('./config.json');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version : '9'}).setToken(config.discord_bot_token);

(async () => {
    try {
        await rest.put(Routes.applicationGuildCommands(config.client_id, config.guild_id), { body: commands });
        console.log("Commands has been saved !");
    } catch (error) {
        console.error(error);
    }
})();