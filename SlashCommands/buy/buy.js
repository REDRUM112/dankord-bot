const { Client, CommandInteraction } = require("discord.js");
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "buy",
    description: "returns a list of shops.",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        let user;
        user = interaction.member;
        const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setURL('https://dankord.com')
        .setAuthor('Current Dankord Shops')
        .setThumbnail(`${user.displayAvatarURL({dynamic:true,size:4096})}`)
        .addFields(
            { name: 'Prosperity.gg', value: '[Website](https://prosperity.gg/)', inline: true},
        )
        .addFields(
            { name: 'Epic Npc', value: '[Website](https://www.epicnpc.com/tags/dank-memer-coins/)', inline: true},
        )
 
        .setTimestamp()
        .setFooter('Dankord', 'https://cdn.discordapp.com/icons/902972970790682644/f4c2f5ea801964663e1f7f6b3386c1c1.png?size=96');

        user.send({ embeds: [exampleEmbed] });
        interaction.followUp({ content: `${user} I have send you a DM with our current shops.` });
    },
};
