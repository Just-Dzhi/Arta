const { Client, IntentsBitField, Message, SlashCommandBuilder } = require('discord.js');
require('dotenv').config();

const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent,
	],
});

client.login(process.env.TOKEN);

client.on('ready', () => {
	//client.user.setUsername('арта♡');
});

client.on('messageCreate', (message) => {
	if (message.content === 'арта, привет') {
		message.reply('привет');
	};

	if (message.content === 'арта, сколько тебе лет?') {
		message.reply('Я эльф, мне 803 года <:7200kokomiuwu:1204487984720642048>');
	};

	if (message.content === 'арта, скажи мяу') {
		message.reply('мяу');
	};
		
	if (message.content === 'арта, поставь реакцию') {
		message.react(':7200kokomiuwu:1204487984720642048');
	};
});