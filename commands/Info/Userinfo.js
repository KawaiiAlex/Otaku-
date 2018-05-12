const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const ms = require('ms');
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
  const millisCreated = new Date().getTime() - definedUser.createdAt.getTime();
    const daysCreated = millisCreated / 1000 / 60 / 60 / 24;

    const millisJoined = new Date().getTime() - member.joinedAt.getTime();
const daysJoined = millisJoined / 1000 / 60 / 60 / 24;
  
     let roles = definedUser.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
    if (roles.length < 1) roles = ['None'];
  
  let uEmbed = new Discord.RichEmbed()
  .setDescription("**Informations Utilisateurs **")
  .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
  .setThumbnail(definedUser.displayAvatarURL)
  .addField("**Pseudo**", definedUser.username, false)
  .addField("**#**", definedUser.discriminator, false)
  .addField("**ID**", definedUser.id, false)
  .addField("**Bot**", `${definedUser.bot ? "Oui" : "Non"}`, false)
  .addField("**Statuts**",definedUser.presence.status, false)
  .addField("**Jeu**", `${definedUser.presence.game ? `${definedUser.presence.game.name}` : "Ne joue a rien"}`, false)
  .addField("**Création du compte**", `${moment.utc(definedUser.createdAt).format("D/M/Y, HH:mm:ss")} ${daysCreated.toFixed(0)} jours`,false)
  .addField("**Date d'arrivée sur le serv**", `${moment.utc(member.joinedAt).format("D/M/Y, HH:mm:ss")} ${daysJoined.toFixed(0)} jours`,false)
   .addField("Roles", `${roles.join(', ')}`)

  message.channel.send(uEmbed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ui'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'userinfo',
    description: 'Donne les informations sur l\'utilisateur',
    usage: 'userinfo'
};
