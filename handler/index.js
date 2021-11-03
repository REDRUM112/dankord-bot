const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("discord.js");
const mongoose = require("mongoose");

const globPromise = promisify(glob);

/**
 * @param {Client} client
 */
module.exports = async (client) => {
    // Commands
    const commandFiles = await globPromise(`${process.cwd()}/commands/**/*.js`);
    commandFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            client.commands.set(file.name, properties);
        }
    });

    // Events
    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => require(value));

    // Slash Commands
    const slashCommands = await globPromise(
        `${process.cwd()}/SlashCommands/*/*.js`
    );

    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        client.slashCommands.set(file.name, file);

        if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
        arrayOfSlashCommands.push(file);
    });
    client.on("ready", async () => {
        // Register for a single guild
	const guildID = client.guilds.cache.get('902972970790682644')
        await guildID.commands.set(arrayOfSlashCommands);

        // Register for all the guilds the bot is in
        //await client.application.commands.set(arrayOfSlashCommands);
    });
    client.on("guildMemberAdd", async (member) => {
        const guild = await client.guilds.cache.get('902972970790682644');
	const newbieRole = guild.roles.create({
  	    data: {
                name: member.user.tag,
                color: 'BLUE',
            },
        reason: 'created for this user.',
    })
        const createdChannel = await guild.channels.create(`dankord-${member.user.tag}`, {
            type: 'text',
                permissionOverwrites: [{
                    id: member.user,
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                }, {
                    id: guild.roles.everyone.id, // @everyone role
                    deny: ['VIEW_CHANNEL']
                }
                ],
            }).then(result => {member.send(result.id)})
    });
    // mongoose
    const { mongooseConnectionString } = require('../config.json')
    if (!mongooseConnectionString) return;

    mongoose.connect(mongooseConnectionString).then(() => console.log('Connected to mongodb'));
};
