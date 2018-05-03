const {RichEmbed} = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const {parseUser} = require('../../util/parseUser.js');
exports.run = (client, message, args) => {

    if(!message.channel.permissionsFor(message.author).has("KICK_MEMBERS")) return message.channel.send("Tu n'as pas les droits").then(msg => {msg.delete(5000)});;
    if(!message.channel.permissionsFor(client.user).has("KICK_MEMBERS")) return message.channel.send("Je n'ai pas les droits").then(msg => {msg.delete(5000)});;
    const user = message.mentions.users.first();
       const member = message.guild.member(user) || null;
    if (user.id === message.author.id) {
      return message.channel.send('Tu ne peux pas te faire ça, pourquoi as-tu essayé?');
    } else if (member) {
      if (member.highestRole.position >= message.member.highestRole.position) return message.channel.send('Le membre ciblé a une position plus ou moins égale à celle de vous.')
    }
    return user;
  };
    var kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Je ne trouve pas cette utilisateur").then(msg => {msg.delete(5000)});
    let kReason = args.join(" ").slice(22);

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#689AFB")
    .addField("Utilisateur kick", `${kUser.tag} ID ${kUser.tag}`)
    .addField("Kick par", `${message.author.tag} with ID ${message.author.id}`)
    .addField("Kick dans", `<#${message.channel.id}>`)
    .addField("Heure", message.createdAt)
    .addField("Raison", kReason);

    let kickChannel = message.guild.channels.find(`name`, "otaku-logs");
    if(!kickChannel) return message.channel.send("Je ne trouve pas le salon ``otaku-logs``.").then(msg => {msg.delete(5000)});

    message.channel.send(`${kUser} à été kick avec succès 💫`).then(msg => {msg.delete(5000)});
    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}


exports.conf = {
  aliases: ['k'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'Kick l\'utilisateur mentionné',
  usage: 'kick [mention] [reason]'
};
