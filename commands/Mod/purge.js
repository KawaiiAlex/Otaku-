const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const messagecount = parseInt(args.join(' '));
  var PurgeEmbed = new Discord.RichEmbed()
    .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
    .addField("Purge", messagecount + " message supprimé")
    .setFooter(`${message.author.username} || Purge`).setTimestamp();

  if (!message.channel.permissionsFor(message.author).has("MANAGE_MESSAGES")) {
    message.reply (" Tu n'as pas la permission").then(msg => {msg.delete(5000)});

  }
if (!message.channel.permissionsFor(client.user).has("MANAGE_MESSAGES")) {
    message.reply ("Je n'es pas la permission ").then(msg => {msg.delete(5000)})
  }

  message.channel.fetchMessages({
    limit: messagecount
    
  }).then(messages => message.channel.bulkDelete(messages))
  message.channel.send(PurgeEmbed).then(msg => {msg.delete(5000)});
};



  
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
  };
  
  exports.help = {
    name: 'purge',
    description: 'Purge X nombre de message.',
    usage: 'purge <nombre>'
  };
  