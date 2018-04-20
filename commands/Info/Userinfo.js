const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const ms = require('ms');
const sm = require("string-similarity");

exports.run = async (client, message, args) => {

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
  
  let uEmbed = new Discord.RichEmbed()
  .setDescription("**User Information**")
  .setColor("#e0d318")
  .setThumbnail(definedUser.displayAvatarURL)
  .addField("**Pseudo**", definedUser.username, true)
  .addField("**#**", definedUser.discriminator, true)
  .addField("**ID**", definedUser.id, true)
  .addField("**Bot**", `${definedUser.bot ? "Oui" : "Non"}`, true)
  .addField("**Statuts**",definedUser.presence.status, true)
  .addField("**Jeu**", `${definedUser.presence.game ? `${definedUser.presence.game.name}` : "Ne joue a rien"}`, true)
  .addField("**Création du compte**", `${moment.utc(definedUser.createdAt).format("D/M/Y, HH:mm:ss")} (${ms(Date.now()- moment.utc(definedUser.createdAt), {long: true})})`)
  .addField("**Date d'arrivée sur le serv**", `${moment.utc(definedUser.joinedAt).format("D/M/Y, HH:mm:ss")}`);

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