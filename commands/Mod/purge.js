const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const messagecount = parseInt(args.join(' '));

  if(!message.channel.permissionsFor(message.author).has("MANAGE_MESSAGES")) return message.channel.send(":x: **|** Tu n'as pas les droits ヽ(ヅ)ノ").then(msg => {msg.delete(5000)});
  if(!message.channel.permissionsFor(client.user).has("MANAGE_MESSAGES")) return message.channel.send(":x: **|** Je n'ai pas les droits （ つ﹏╰）").then(msg => {msg.delete(5000)});;

  var PurgeEmbed = new Discord.RichEmbed()
    .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
    .addField("Purge", "**" + messagecount + "** messages supprimés")
    .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()

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
  
