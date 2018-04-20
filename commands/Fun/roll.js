const Discord = require('discord.js');
exports.run = (client, message, args) => {

  let result = Math.floor((Math.random() * 100) + 1);
  message.channel.send(":white_check_mark: | **Tu as obtenu le nombre** " + result);
}

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'roll',
    description: 'Donne un nombre aléatoire entre 1 et 100',
    usage: 'roll'
  };