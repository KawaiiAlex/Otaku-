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
  
  let uEmbed = new Discord.RichEmbed()
  .setDescription("Information sur" + definedUser.tag)
  .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
  .setThumbnail(definedUser.displayAvatarURL)
  .addField("Pseudo", definedUser.username, false)
  .addField("#", definedUser.discriminator, false)
  .addField("𝑰𝑫", definedUser.id, false)
  .addField("𝑩𝒐𝒕", `${definedUser.bot ? "𝑶𝒖𝒊" : "𝑵𝒐𝒏"}`, false)
  .addField("𝑺𝒕𝒂𝒕𝒖𝒕",definedUser.presence.status, false)
  .addField("𝑱𝒆𝒖", `${definedUser.presence.game ? `${definedUser.presence.game.name}` : "𝑵𝒆 𝒋𝒐𝒖𝒆 𝒂̀ 𝒓𝒊𝒆𝒏"}`, false)
  .addField("𝑪𝒓𝒆́𝒂𝒕𝒊𝒐𝒏 𝒅𝒖 𝒄𝒐𝒎𝒑𝒕𝒆", `${moment.utc(definedUser.createdAt).format("D/M/Y, HH:mm:ss")} ${daysCreated.toFixed(0)} 𝒋𝒐𝒖𝒓𝒔`,false)
  .addField("𝑫𝒂𝒕𝒆 𝒅'𝒂𝒓𝒓𝒊𝒗𝒆́𝒆 𝒔𝒖𝒓 𝒍𝒆 𝒔𝒆𝒓𝒗", `${moment.utc(member.joinedAt).format("D/M/Y, HH:mm:ss")} ${daysJoined.toFixed(0)} 𝒋𝒐𝒖𝒓𝒔`,false)
  .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()

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
    usage: 'userinfo / userinfo <mention>'
};
