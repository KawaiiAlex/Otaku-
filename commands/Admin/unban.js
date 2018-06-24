exports.run = (client, message, args) => {
    client.unbanAuth = message.author;
    const user = args[0];

    if(!message.channel.permissionsFor(message.author).has("BAN_MEMBERS")) return message.channel.send(":x: **|** 𝑻𝒖 𝒏'𝒂𝒔 𝒑𝒂𝒔 𝒍𝒆𝒔 𝒅𝒓𝒐𝒊𝒕𝒔 ヽ(ヅ)ノ").then(msg => {msg.delete(5000)});
    if(!message.channel.permissionsFor(client.user).has("BAN_MEMBERS")) return message.channel.send(":x: **|** 𝑱𝒆 𝒏'𝒂𝒊 𝒑𝒂𝒔 𝒍𝒆𝒔 𝒅𝒓𝒐𝒊𝒕𝒔 （ つ﹏╰）").then(msg => {msg.delete(5000)});;

    if (!user) return message.reply(':x: **|** 𝑻𝒖 𝒅𝒐𝒊𝒔 𝒅𝒆́𝒇𝒊𝒏𝒊𝒓 𝒍\'𝑰𝑫 𝒅𝒆 𝒍𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒏𝒆 𝒂̀ 𝒅𝒆𝒃𝒂𝒏 ¯\_(ツ)_/¯').catch(console.error);
    message.guild.unban(user);
    message.channel.send(`:white_check_mark: **|** **<@${user}>** 𝒂 𝒃𝒊𝒆𝒏 𝒆́𝒕𝒆́ 𝒅𝒆𝒃𝒂𝒏 ✌(◕‿-)✌`).then(msg => {msg.delete(5000)});
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['deban'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'unban',
    description: 'Unban un utilisateur.',
    usage: 'unban <ID>'
  };