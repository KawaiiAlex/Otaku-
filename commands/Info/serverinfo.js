const Discord = require('discord.js');
exports.run = (client, message, args) => {

 let sicon = message.guild.iconURL;
 let serverembed = new Discord.RichEmbed()
 .setDescription("Serveur information")
 .setColor("#689AFB")
 .setThumbnail(sicon)
 .addField("Nom du serveur", message.guild.name,false )
 .addField("Date de création", message.guild.createdAt,false)
 .addField("Date d'arriver", message.member.joinedAt,false)
 .addField("Membres Total", message.guild.memberCount,false)
 .addField ("ID du serveur", message.guild.id, false)
.addField ("Propriétaire du serveur", message.guild.owner.id,false)
.setFooter(`${message.author.username} || Serveur info ||`).setTimestamp();

 message.channel.send(serverembed);
}
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['si'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'serverinfo',
    description: 'Donne les informations sur le seveur',
    usage: 'serverinfo'
  };