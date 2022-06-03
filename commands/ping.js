const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Ping the bot'),
    async execute(interaction) {
        await interaction.reply('pong');

        const message = await interaction.fetchReply();

        return interaction.editReply(`le message a mis ${message.createdTimestamp - interaction.createdTimestamp}ms pour me parvenir\n ton ping est de ${interaction.client.ws.ping}`);
    }
}