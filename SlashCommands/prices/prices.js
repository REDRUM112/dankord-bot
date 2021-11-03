const { Client, CommandInteraction } = require("discord.js");
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "prices",
    description: "returns a list of prices.",
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
        .setColor('#672eff')
        .setURL('https://www.epicnpc.com/threads/dankord-very-cheap-dank-memer-items-coins-we-sell-everything.2084965/')
        .setAuthor('Dankord Prices')
	.setDescription('All items are always in stock.')
        .setThumbnail(`${user.displayAvatarURL({dynamic:true,size:4096})}`)
        .addFields(
            { name: 'Coins <a:coin:904088940225626132> ', value: '0.35/M', inline: true},
        )
        .addFields(
            { name: "Aetheryx's Flower <:Aetheryx:904084367830290462>", value: '- 1.50/Each', inline: true},
        )
        .addFields(
            { name: 'Bank Notes <:banknotes:904084367733821441>', value: '- 0.05/Each', inline: true},
        )

        .addFields(
            { name: 'Dank boxes <a:dankbox:904084367901614151>', value: '- 0.50/Each', inline: true},
        )

        .addFields(
            { name: 'Normie Boxes <a:normiebox:904084367620571159>', value: '- 0.10/Each', inline: true},
        )

	  .addFields(
            { name: 'Any Phallic Object <a:phallic:904084367587045417>', value: '- 0.01/Each', inline: true},
        )

        .addFields(
            { name: 'Lucky Horseshoes <:horseshoe:904084367557656577>', value: '- 0.03/Each', inline: true},
        )

        .addFields(
            { name: 'Life Savers <:lifesaver:904084367985479730>', value: '- 0.03/Each', inline: true},
        )
	
        .setFooter('Auto deliveries are coming soon, in the mean time create a ticket in the #support channel.', 'https://cdn.discordapp.com/icons/902972970790682644/f4c2f5ea801964663e1f7f6b3386c1c1.png?size=96');

        interaction.followUp({  embeds: [exampleEmbed] });

    },
};