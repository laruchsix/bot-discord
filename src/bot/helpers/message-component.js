const { Client, CommandInteraction } = require('discord.js');

/**
 * 
 * @param {Client} client 
 * @param {CommandInteraction} interaction 
 * @returns 
 */
const handleMessageComponents = async (client, interaction) => {
    const messageCom = client.commands.get(
        interaction.message.interaction.commandName
    );
    
    if (!messageCom) return;

    try {
        await messageCom.executeMessageComponent(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({
            content : "An error occured while executing the the message component", 
            ephemeral : true
        });
    }
}

module.exports = handleMessageComponents;