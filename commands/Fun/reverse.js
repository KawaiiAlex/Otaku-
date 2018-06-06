const Discord = require('discord.js');

exports.run = (client, message, args) => {

  if (args.length < 1) {
    message.channel.send(':no_entry_sign: You must input text to be reversed!').then(m => m.delete(2000));
    return;
}

var text = message.content.substring(10)

let ReverseEmbed = new Discord.RichEmbed()
  .setAuthor("Reverse")
  .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
  .addField("Avant", text)
  .addField("Après", args.join(' ').split('').reverse().join(''))
  message.channel.send(ReverseEmbed);

};

      exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['inverse'],
        permLevel: 0
      };
      
      exports.help = {
        name: 'reverse',
        description: 'Inverse le message que vous voulez',
        usage: 'reverse <mot/phrase>'
      };