const chalk = require('chalk');
const Discord = require('discord.js');
const purplecolor = chalk.keyword('purple');

module.exports = client => { // eslint-disable-line no-unused-vars
  console.log(purplecolor(`${client.user.username} en ligne. \n` + 'Connecté dans:\n' + client.guilds.array()));
  client.user.setActivity(`${client.users.size} utilisateurs et ${client.guilds.size} serveurs || //help`, {type: "WATCHING"})
};