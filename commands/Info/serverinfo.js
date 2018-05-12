const Discord = require('discord.js')
const moment = require ("moment")
const ms = require("ms");
const sm = require("string-similarity");

exports.run = (client, message, args) => {
  
    if(message.author.bot) return;
  if(message.channel.type !== "text") return;
  
  let members = [];
  let indexes = [];
  
  message.guild.members.forEach(function(member){
    members.push(member.user.username);
    indexes.push(member.id);
  })
  
  let match = sm.findBestMatch(args.join(' '), members);
  let username = match.bestMatch.target;
  
    let member = message.guild.members.get(indexes[members.indexOf(username)])
    
     let definedUser = "";
     let definedUser2 = "";
    if(!args[0]) {
      definedUser = message.author
      definedUser2 = message.member
    } else {
      let mention = message.mentions.users.first()
      definedUser = mention || member.user
        definedUser2 = message.mentions.members.first() || message.guild.members.get(args[0]) || member
    }
  const millisCreated = new Date().getTime() - message.guild.createdAt.getTime();
    const daysCreated = millisCreated / 1000 / 60 / 60 / 24;

    const millisJoined = new Date().getTime() - message.member.joinedAt.getTime();
const daysJoined = millisJoined / 1000 / 60 / 60 / 24;
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("Informations serveur")
  .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
  .setThumbnail(sicon)
  .addField("Nom du serveur", message.guild.name,false )
  .addField("Date de création", `${moment.utc(member.joinedAt).format("D/M/Y, HH:mm:ss")} ${daysCreated.toFixed(0)} jours`,false)
  .addField("Date de venue", `${moment.utc(message.member.joinedAt).format("D/M/Y, HH:mm:ss")} ${daysJoined.toFixed(0)} jours`, false )
  .addField("Membres Totaux", message.guild.memberCount,false)
  .addField ("Propriétaire du serveur", `<@${message.guild.owner.id}>`,false)
  .addField ("ID du serveur", message.guild.id, false)
 .setImage ( sicon)
.setTimestamp()
  .setFooter(`${message.author.username} | Server Info`);
  return message.channel.send(serverembed);

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
