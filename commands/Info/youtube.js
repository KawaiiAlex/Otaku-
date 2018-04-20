const Discord = require('discord.js');
exports.run = (client, message) => {

let args = message.content.split(' ')
   		args.shift ()
   		message.channel.send ("Voici le résultat de votre recherche: https://www.youtube.com/results?search_query=" +args.join('+'))
         console.log(`${message.author.username} | youtube `)
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