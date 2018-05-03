const {RichEmbed} = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const {parseUser} = require('../../util/parseUser.js');
exports.run = (client, message, args) => {

    if(!message.channel.permissionsFor(message.author).has("KICK_MEMBERS")) return message.channel.send("Tu n'as pas les droits").then(msg => {msg.delete(5000)});;
    if(!message.channel.permissionsFor(client.user).has("KICK_MEMBERS")) return message.channel.send("Je n'ai pas les droits").then(msg => {msg.delete(5000)});;
    const user = message.mentions.users.first();
    if(parseUser(message, user)) return message.channel.send(":x:");
    var kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Je ne trouve pas cette utilisateur").then(msg => {msg.delete(5000)});
    let kReason = args.join(" ").slice(22);

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~", false)
    .setColor("#689AFB", false)
    .addField("Utilisateur kick", `${kUser.tag} ID ${kUser.tag}`, false)
    .addField("Kick par", `${message.author.tag} with ID ${message.author.id}`, false)
    .addField("Kick dans", `<#${message.channel.id}>`, false)
    .addField("Heure", message.createdAt, false)
    .addField("Raison", kReason, false);

    let kickChannel = message.guild.channels.find(`name`, "otaku-logs");
    if(!kickChannel) return message.channel.send("Je ne trouve pas le salon ``otaku-logs``.").then(msg => {msg.delete(5000)});

    message.channel.send(`${kUser} à été kick avec succès 💫`).then(msg => {msg.delete(5000)});
    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'Kick l\'utilisateur mentionné',
  usage: 'kick [mention] [reason]'
};
