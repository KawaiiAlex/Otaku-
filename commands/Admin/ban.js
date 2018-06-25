exports.run = (client, message, args) => {

  if(!message.channel.permissionsFor(message.author).has("BAN_MEMBERS")) return message.channel.send(":x: **|** Tu n'as pas les droits ヽ(ヅ)ノ").then(msg => {msg.delete(5000)});
  if(!message.channel.permissionsFor(client.user).has("BAN_MEMBERS")) return message.channel.send(":x: **|** Je n'ai pas les droits （ つ﹏╰）").then(msg => {msg.delete(5000)});;

  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send(":x: **|** Je ne trouve pas cette utilisateur ಥ_ಥ").then(msg => {msg.delete(5000)});
  let bReason = args.join(" ").slice(22);
  if (bUser.highestRole.position >= message.member.highestRole.position) return message.channel.send(":x: **|** Tu ne peux pas le ban  (/❛o❛)/").then(msg => {msg.delete(5000)});  

  message.channel.send(`:white_check_mark: **|** **<@${bUser.id}>** a été ban avec succè𝒔 ( ＾◡＾)っ`).then(msg => {msg.delete(5000)});;
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
