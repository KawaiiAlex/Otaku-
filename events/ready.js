const chalk = require('chalk');
const Discord = require('discord.js');
const purplecolor = chalk.keyword('purple');

module.exports = client => { // eslint-disable-line no-unused-vars
  console.log(purplecolor(`${client.user.username} en ligne. \n` + 'Connecté dans:\n' + client.guilds.array()));
 client.user.setActivity(`//help, ${client.users.size} 𝒖𝒕𝒊𝒍𝒊𝒔𝒂𝒕𝒆𝒖𝒓𝒔, ${client.guilds.size} 𝒔𝒆𝒓𝒗𝒆𝒖𝒓𝒔 `, 'https://www.twitch.tv/ryvalgaming')
  //client.user.setAvatar("https://cdn.discordapp.com/attachments/395572370401918977/444153224791064588/pdp_otaku.png");
  /*
  client.user.setActivity(`${client.users.username} en modification`, {type: "WATCHING"});
  client.user.setStatus( 'idle' );
  */

};

