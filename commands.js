const { token, guildid, clientid } = require('./config.json');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [
	{
		name: 'redeem',
		description: 'Usage: /redeem <token> <product key>',
		options: [
			{
				type: '3',
				name: 'token',
				description: 'Your discord alt account auth token.',
				required: true,
			},
			{
				type: '3',
				name: 'product-key',
				description: 'The product key you bought.',
				required: true,
			},
		],
	},
	{
		name: 'stock',
		description: 'Replies with an aproximative amount of coins in stock.',
	},
];

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(clientid, guildid),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	}
	catch (error) {
		console.error(error);
	}
})();