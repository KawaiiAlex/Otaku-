const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const messagecount = parseInt(args.join(' '));

  if(!message.channel.permissionsFor(message.author).has("MANAGE_MESSAGES")) return message.channel.send(":x: **|** 𝑻𝒖 𝒏'𝒂𝒔 𝒑𝒂𝒔 𝒍𝒆𝒔 𝒅𝒓𝒐𝒊𝒕𝒔 ヽ(ヅ)ノ").then(msg => {msg.delete(5000)});
  if(!message.channel.permissionsFor(client.user).has("MANAGE_MESSAGES")) return message.channel.send(":x: **|** 𝑱𝒆 𝒏'𝒂𝒊 𝒑𝒂𝒔 𝒍𝒆𝒔 𝒅𝒓𝒐𝒊𝒕𝒔 （ つ﹏╰）").then(msg => {msg.delete(5000)});;

  var PurgeEmbed = new Discord.RichEmbed()
    .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
    .addField("𝑷𝒖𝒓𝒈𝒆", "**" + messagecount + "** 𝒎𝒆𝒔𝒔𝒂𝒈𝒆s 𝒔𝒖𝒑𝒑𝒓𝒊𝒎𝒆́")
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
  