exports.run = (client, message, args) => {

  if(!message.channel.permissionsFor(message.author).has("KICK_MEMBERS")) return message.channel.send(":x: **|** Tu n'as pas les droits ヽ(ヅ)ノ").then(msg => {msg.delete(5000)});
  if(!message.channel.permissionsFor(client.user).has("KICK_MEMBERS")) return message.channel.send(":x: **|** Je n'ai pas les droits （ つ﹏╰）").then(msg => {msg.delete(5000)});;
    var kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send(":x: **|** Je ne trouve pas cette utilisateur ಥ_ಥ").then(msg => {msg.delete(5000)});
    if (kUser.highestRole.position >= message.member.highestRole.position)   return message.channel.send(":x: **|** Tu ne peux pas le kick (/❛o❛)/").then(msg => {msg.delete(5000)}); 

    message.channel.send(`:white_check_mark: **|** ${kUser} a été kick avec succès ( ＾◡＾)っ`).then(msg => {msg.delete(5000)});
    message.guild.member(kUser).kick(kReason);;
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
  usage: 'kick <mention> <reason>'
};
