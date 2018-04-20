exports.run = (client, message) => {
    message.channel.send('Lien en mp C;').then(msg => {msg.delete(5000)})
    message.author.send('Voici le lien du serveur de mon créateur C; \nhttps://discord.gg/6gd668Q')
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['otaku'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'Otaku',
    description: 'Pour rejoindre le serv de mon créateur, ils sont bien sympa C;',
    usage: 'Otaku'
  };