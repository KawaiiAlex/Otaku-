const Discord = require('discord.js');
exports.run = (client, message) => {

let args = message.content.split(' ')
   		args.shift ()
   		message.channel.send ("𝑽𝒐𝒊𝒄𝒊 𝒍𝒆 𝒓𝒆́𝒔𝒖𝒍𝒕𝒂𝒕 𝒅𝒆 𝒗𝒐𝒕𝒓𝒆 𝒓𝒆𝒄𝒉𝒆𝒓𝒄𝒉𝒆: https://www.youtube.com/results?search_query=" +args.join('+'))
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yt'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'youtube',
    description: 'Faîte n\'importe qu\'elle recherche de vidéo youtube facilement',
    usage: 'youtube <recherche>'
  };