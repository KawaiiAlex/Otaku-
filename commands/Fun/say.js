const Discord = require('discord.js');
exports.run = (client, message, args) => {

 //!say Hi!
  //Hi
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);
}
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'say',
    description: 'Répète tout ce que vous dîtes',
    usage: 'say [mot/phrase]'
  };