const Discord = require('discord.js');
exports.run = (client, message) => {

let args = message.content.split(' ')
   		args.shift ()
   		message.channel.send ("𝑽𝒐𝒊𝒄𝒊 𝒍𝒆 𝒓𝒆́𝒔𝒖𝒍𝒕𝒂𝒕 𝒅𝒆 𝒗𝒐𝒕𝒓𝒆 𝒓𝒆𝒄𝒉𝒆𝒓𝒄𝒉𝒆: https://www.google.fr/#q=" +args.join('%20'))
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'google',
    description: 'Faîte n\'importe qu\'elle recherche google facilement et rapidement',
    usage: 'google <recherche>'
  };