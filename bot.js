const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', message => {
	if (message.content === 'ping') {
		message.reply('pong');
       }
});

// THIS  MUST  BE  THIS  WAY
client.login("NzIwMDU3OTM3NzE1Nzg5OTg0.XuAcnQ.CPeFCgpizdSMojSKopIHdNLqPmQ");//BOT_TOKEN is the Client Secret
