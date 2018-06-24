exports.run = (client, message, args) => {

  if(!message.channel.permissionsFor(message.author).has("KICK_MEMBERS")) return message.channel.send(":x: **|** 𝑻𝒖 𝒏'𝒂𝒔 𝒑𝒂𝒔 𝒍𝒆𝒔 𝒅𝒓𝒐𝒊𝒕𝒔 ヽ(ヅ)ノ").then(msg => {msg.delete(5000)});
  if(!message.channel.permissionsFor(client.user).has("KICK_MEMBERS")) return message.channel.send(":x: **|** 𝑱𝒆 𝒏'𝒂𝒊 𝒑𝒂𝒔 𝒍𝒆𝒔 𝒅𝒓𝒐𝒊𝒕𝒔 （ つ﹏╰）").then(msg => {msg.delete(5000)});;
    var kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send(":x: **|** 𝑱𝒆 𝒏𝒆 𝒕𝒓𝒐𝒖𝒗𝒆 𝒑𝒂𝒔 𝒄𝒆𝒕𝒕𝒆 𝒖𝒕𝒊𝒍𝒊𝒔𝒂𝒕𝒆𝒖𝒓 ಥ_ಥ").then(msg => {msg.delete(5000)});
    if (kUser.highestRole.position >= message.member.highestRole.position)   return message.channel.send(":x: **|** 𝑻𝒖 𝒏𝒆 𝒑𝒆𝒖𝒙 𝒑𝒂𝒔 𝒍𝒆 𝒌𝒊𝒄𝒌  (/❛o❛)/").then(msg => {msg.delete(5000)}); 

    message.channel.send(`:white_check_mark: **|** ${kUser} 𝒂 𝒆́𝒕𝒆́ 𝒌𝒊𝒄𝒌 𝒂𝒗𝒆𝒄 𝒔𝒖𝒄𝒄𝒆̀𝒔 ( ＾◡＾)っ`).then(msg => {msg.delete(5000)});
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
