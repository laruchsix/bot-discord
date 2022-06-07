const { Client, CommandInteraction } = require('discord.js');

const handleCommand = async (client, interaction) => {
    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({
            content : "An error occured while executing the command", 
            ephemeral : true
        });
    }

}

module.exports = handleCommand;