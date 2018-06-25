exports.run = (client, message, args) => {
    client.unbanAuth = message.author;
    const user = args[0];

    if(!message.channel.permissionsFor(message.author).has("BAN_MEMBERS")) return message.channel.send(":x: **|** Tu n'as pas les droits ヽ(ヅ)ノ").then(msg => {msg.delete(5000)});
    if(!message.channel.permissionsFor(client.user).has("BAN_MEMBERS")) return message.channel.send(":x: **|** Je n'ai pas les droits （ つ﹏╰）").then(msg => {msg.delete(5000)});;

    if (!user) return message.reply(':x: **|** Tu dois définir l\'ID de la personne à deban ¯\_(ツ)_/¯').catch(console.error);
    message.guild.unban(user);
    message.channel.send(`:white_check_mark: **|** **<@${user}>** a bien été deban ✌(◕‿-)✌`).then(msg => {msg.delete(5000)});
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
