const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
  let definedNumber = message.content.substring(6)

  let result = Math.floor((Math.random() * definedNumber) + 1);
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
    description: 'Donne un nombre aléatoire',
    usage: 'roll'
  };
