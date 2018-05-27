const Discord = require('discord.js');
const {RichEmbed} = require('discord.js');
exports.run = (client, message, args) => {

  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Tu n'as pas les droits").then(msg => {msg.delete(5000)});

  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Can't find user!");
  let bReason = args.join(" ").slice(22);
  if (bUser.highestRole.position >= message.member.highestRole.position) return message.channel.send("Tu ne peux pas le ban").then(msg => {msg.delete(5000)});
  const user = message.mentions.users.first();   

  let banEmbed = new Discord.RichEmbed()
  .setDescription("~Ban~")
  .setColor("#bc0000")
  .addField("Banned User", `${bUser} with ID ${bUser.id}`)
  .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Banned In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason);


  message.channel.send(`${bUser} à été ban avec succès 💫`).then(msg => {msg.delete(5000)});;
  message.guild.member(bUser).ban(bReason);
  
   let incidentchannel = message.guild.channels.find(`name`, "otaku-logs");
  if(!incidentchannel) return message.channel.send("Je ne trouve pas le channel``otaku-logs``. \n Vous pouvez créé ce salon pour pouvoir enrengistré les actions de modération");
  
    incidentchannel.send(banEmbed);
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['b'],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'Ban l\'utilisateur mentionné',
  usage: 'ban [mention] [raison]'
};
