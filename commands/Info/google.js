const Discord = require('discord.js');
exports.run = (client, message) => {

let args = message.content.split(' ')
   		args.shift ()
   		message.channel.send ("Voici le résultat de votre recherche: https://www.google.fr/#q=" +args.join('%20'))
         console.log(`${message.author.username} | google `)
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