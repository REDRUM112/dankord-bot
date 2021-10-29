const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { token } = require('./config.json');
// eslint-disable-next-line no-unused-vars
const refreshcommands = require('./commands.js');

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'redeem') {
		const alttoken = interaction.options.getString('token');
		const key = interaction.options.getString('product-key');
		await interaction.reply(alttoken, key);

		console.log(alttoken, key);
	}

	if (interaction.commandName === 'stock') {
		await interaction.reply('we currently have 500b available.');
	}
});

client.login(token);