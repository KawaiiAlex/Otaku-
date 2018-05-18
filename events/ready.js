const chalk = require('chalk');
const Discord = require('discord.js');
const purplecolor = chalk.keyword('purple');

module.exports = client => { // eslint-disable-line no-unused-vars
  console.log(purplecolor(`${client.user.username} en ligne. \n` + 'Connecté dans:\n' + client.guilds.array()));
 client.user.setActivity("//help pour plus d'info", 'https://www.twitch.tv/ryvalgaming')
  client.user.setAvatar("https://cdn.discordapp.com/attachments/396314626565865482/447125319275773952/3d8f70a9d57f9cf514d4e06cda15c81e.png");
  /*
  client.user.setActivity(`${client.users.username} en modification`, {type: "WATCHING"});
  client.user.setStatus( 'idle' );
  */

};
