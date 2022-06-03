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
            );

        return interaction.reply({ content : 'Don\'t press it', components : [row]});
    },
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async executeMessageComponent(interaction) {
        console.log(interaction.message.interaction.user.username);

        return interaction.reply({ content : `You gona die ${interaction.user.username}`});
    }
}