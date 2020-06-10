const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./demon_config.json");

client.on('ready', () => {
	console.log("Dots` Demon");
});

client.login(config.token);
