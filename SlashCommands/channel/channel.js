const { Client, CommandInteraction } = require("discord.js");
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "channel",
    description: "creates a new text channel in a secret location.",
    type: 'STRING',
    options: [
        {
            type:"STRING",
            name: 'channel-int',
            description: 'enter a channel number.',
            required: true,
        },
    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        let user;
        user = interaction.member;
        if(interaction.guild.id != '902358800667901982'){
   		    interaction.followUp("get gud");
        }else{
            const createdChannel = await interaction.guild.channels.create("dank-memer-"+interaction.options.getString('channel-int'), {
            type: 'text',
                parent: '903787092264509460',
                permissionOverwrites: [{
                id: '902358800667901982',
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                }],
            }).then(result => {user.send(result.id)})
        }
    },
};