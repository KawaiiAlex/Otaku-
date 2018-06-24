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
  .setDescription("𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏𝒔 𝒔𝒆𝒓𝒗𝒆𝒖𝒓")
  .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
  .setThumbnail(sicon)
  .addField("𝑵𝒐𝒎 𝒅𝒖 𝒔𝒆𝒓𝒗𝒆𝒖𝒓", message.guild.name,false )
  .addField("𝑫𝒂𝒕𝒆 𝒅𝒆 𝒄𝒓𝒆́𝒂𝒕𝒊𝒐𝒏", `${moment.utc(member.joinedAt).format("D/M/Y, HH:mm:ss")} ${daysCreated.toFixed(0)} 𝒋𝒐𝒖𝒓𝒔`,false)
  .addField("𝑫𝒂𝒕𝒆 𝒅'𝒂𝒓𝒓𝒊𝒗𝒆𝒓", `${moment.utc(message.member.joinedAt).format("D/M/Y, HH:mm:ss")} ${daysJoined.toFixed(0)} 𝒋𝒐𝒖𝒓𝒔`, false )
  .addField("𝑴𝒆𝒎𝒃𝒓𝒆𝒔 𝑻𝒐𝒕𝒂𝒖𝒙", message.guild.memberCount,false)
  .addField ("𝑷𝒓𝒐𝒑𝒓𝒊𝒆́𝒕𝒂𝒊𝒓𝒆 𝒅𝒖 𝒔𝒆𝒓𝒗𝒆𝒖𝒓", `<@${message.guild.owner.id}>`,false)
  .addField ("𝑰𝑫 𝒅𝒖 𝒔𝒆𝒓𝒗𝒆𝒖𝒓", message.guild.id, false)
 .setImage ( sicon)
.setTimestamp()
.setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()
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
