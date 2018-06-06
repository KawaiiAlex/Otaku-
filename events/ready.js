const chalk = require('chalk');
const Discord = require('discord.js');
const fs = require("fs");
const config = require('../config.json')
const purplecolor = chalk.keyword('purple');

module.exports = client => { // eslint-disable-line no-unused-vars
  const ownerBot = client.users.get('281125214098685954').tag
  console.log(purplecolor(`${client.user.username} en ligne. \n` + 'Connecté dans:\n' + client.guilds.array()));
 client.user.setGame('//help pour plus d\'info | ' + client.guilds.size() + ' serveurs | créé par ' + ownerBot, 'https://www.twitch.tv/ryvalgaming')
  client.user.setAvatar("https://cdn.discordapp.com/attachments/396314626565865482/447125319275773952/3d8f70a9d57f9cf514d4e06cda15c81e.png");
  /*
  client.user.setActivity(`${client.users.username} en modification`, {type: "WATCHING"});
  client.user.setStatus( 'idle' );
  */

};
