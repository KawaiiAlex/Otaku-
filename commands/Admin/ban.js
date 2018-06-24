exports.run = (client, message, args) => {

  if(!message.channel.permissionsFor(message.author).has("BAN_MEMBERS")) return message.channel.send(":x: **|** 𝑻𝒖 𝒏'𝒂𝒔 𝒑𝒂𝒔 𝒍𝒆𝒔 𝒅𝒓𝒐𝒊𝒕𝒔 ヽ(ヅ)ノ").then(msg => {msg.delete(5000)});
  if(!message.channel.permissionsFor(client.user).has("BAN_MEMBERS")) return message.channel.send(":x: **|** 𝑱𝒆 𝒏'𝒂𝒊 𝒑𝒂𝒔 𝒍𝒆𝒔 𝒅𝒓𝒐𝒊𝒕𝒔 （ つ﹏╰）").then(msg => {msg.delete(5000)});;

  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send(":x: **|** 𝑱𝒆 𝒏𝒆 𝒕𝒓𝒐𝒖𝒗𝒆 𝒑𝒂𝒔 𝒄𝒆𝒕𝒕𝒆 𝒖𝒕𝒊𝒍𝒊𝒔𝒂𝒕𝒆𝒖𝒓 ಥ_ಥ").then(msg => {msg.delete(5000)});
  let bReason = args.join(" ").slice(22);
  if (bUser.highestRole.position >= message.member.highestRole.position) return message.channel.send(":x: **|** 𝑻𝒖 𝒏𝒆 𝒑𝒆𝒖𝒙 𝒑𝒂𝒔 𝒍𝒆 𝒃𝒂𝒏  (/❛o❛)/").then(msg => {msg.delete(5000)});  

  message.channel.send(`:white_check_mark: **|** **<@${bUser.id}>** 𝒂 𝒆́𝒕𝒆́ 𝒃𝒂𝒏 𝒂𝒗𝒆𝒄 𝒔𝒖𝒄𝒄𝒆̀𝒔 ( ＾◡＾)っ`).then(msg => {msg.delete(5000)});;
  message.guild.member(bUser).ban(bReason);
  
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['b'],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'Ban l\'utilisateur mentionné',
  usage: 'ban <mention>'
};
