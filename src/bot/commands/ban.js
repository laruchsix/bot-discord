const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('red_button')
        .setDescription("don't press it"),
        /**
         * 
         * @param {CommandInteraction} interaction 
         */
    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(new MessageButton()
                .setLabel('DANGER')
                .setStyle('DANGER')
                .setCustomId('red_button')
            ).addComponents(new MessageButton()
            .setLabel('EZ')
            .setStyle('SECONDARY')
            .setCustomId('second'));

        return interaction.reply({ content : 'Don\'t press it', components : [row]});
    },
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async executeMessageComponent(interaction) {

        if (interaction.customId === "red_button")
            return interaction.reply({ content : `You gona die ${interaction.user.username}`});
        else
            return interaction.reply({ content : `You gona live ${interaction.user.username}`});
    }
}