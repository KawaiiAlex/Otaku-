const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
  let definedNumber = message.content.substring(6)

  let result = Math.floor((Math.random() * definedNumber) + 1);
  message.channel.send(":white_check_mark: **|** 𝑻𝒖 𝒂𝒔 𝒐𝒃𝒕𝒆𝒏𝒖 𝒍𝒆 𝒏𝒐𝒎𝒃𝒓𝒆 **" + result + "**");
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
