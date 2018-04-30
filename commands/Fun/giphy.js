const Discord = require('discord.js');
exports.run = (client, message) => {

let args = message.content.split(' ')
   		args.shift ()
   		message.channel.send ("Voici le résultat de votre recherche:\n https://giphy.com/search/#q=" +args.join('-'))
         console.log(`${message.author.username} | gif `)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['gif'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'giphy',
    description: 'Faîte n\'importe qu\'elle recherche de gif facilement et rapidement',
    usage: 'giphy <recherche>'
  };
