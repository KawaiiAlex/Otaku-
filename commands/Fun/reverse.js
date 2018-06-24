const Discord = require('discord.js');

exports.run = (client, message, args) => {

  if (args.length < 1) {
    message.delete().catch();
    message.channel.send(':x: **|** 𝑽𝒐𝒖𝒔 𝒅𝒆𝒗𝒆𝒛 𝒆𝒏𝒕𝒓𝒆𝒓 𝒍𝒆 𝒕𝒆𝒙𝒕𝒆 𝒂̀ 𝒊𝒏𝒗𝒆𝒓𝒔𝒆𝒓! (͡° ͜ʖ ͡°)').then(m => m.delete(5000));
    return;
}

var text = message.content.substring(10)

let ReverseEmbed = new Discord.RichEmbed()
  .setAuthor("𝑹𝒆𝒗𝒆𝒓𝒔𝒆")
  .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
  .addField("𝑨𝒗𝒂𝒏𝒕", text)
  .addField("𝑨𝒑𝒓𝒆̀𝒔", args.join(' ').split('').reverse().join(''))
  .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()
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