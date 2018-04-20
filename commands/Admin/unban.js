exports.run = (client, message, args) => {
    client.unbanAuth = message.author;
    const user = args[0];
    const modlog = client.channels.find('name', 'otaku-logs');

    if (!message.channel.permissionsFor(message.author).hasPermission("BAN_MEMBERS")) {
      message.reply (" Tu n'as pas la permission").then(msg => {msg.delete(5000)});
      return;
    }
    else if (!message.channel.permissionsFor(client.user).hasPermission("BAN_MEMBERS")) {
      message.reply ("Je n'es pas la permission ").then(msg => {msg.delete(5000)});
      return;
    }

    if (!modlog) return message.reply('Je ne trouve pas le channel ``otaku-logs``');
    if (!user) return message.reply('Tu dois mettre l\'ID de la personne a deban').catch(console.error);
    message.guild.unban(user);
    message.channel.send(`<@${user}> a bien été deban`).then(msg => {msg.delete(5000)});
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['deban'],
    permLevel: 2
  };
  
  exports.help = {
    name: 'unban',
    description: 'Unbans the user.',
    usage: 'unban [ID]'
  };