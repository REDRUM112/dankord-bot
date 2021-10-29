const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "stock",
    description: "returns current stock",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ content: `we currently have 500b!` });
    },
};
