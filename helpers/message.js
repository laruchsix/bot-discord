const { Client, CommandInteraction } = require('discord.js');

/**
 * 
 * @param {Client} client 
 * @param {CommandInteraction} interaction 
 * @returns 
 */
const handleMessageComponents = async (client, interaction) => {
    console.log(interaction);

    /*const message = client.commands.get(
        interaction.message.interaction.commandName);
    
    if (!message) return;

*/
    /*try {
        await messageCom.executeMessageComponent(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({
            content : "An error occured while executing the the message component", 
            ephemeral : true
        });
    }*/
 
}

module.exports = handleMessageComponents;