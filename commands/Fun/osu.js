const {Attachment} = require('discord.js')

exports.run = async (client, message, args) => {

        if(!args[0]) return message.channel.sendMessage("𝑫𝒐𝒏𝒏𝒆𝒛 𝒖𝒏 𝒖𝒕𝒊𝒍𝒊𝒔𝒂𝒕𝒆𝒖𝒓 𝒗𝒂𝒍𝒊𝒅𝒆")
          message.channel.startTyping();
  message.channel.send({files: [new Attachment(`https://lemmmy.pw/osusig/sig.php?colour=pink&uname=${args.join('%20')}&pp=2&countryrank&flagstroke&darktriangles&onlineindicator=undefined&xpbar&xpbarhex`, `banner.png`)]})
            message.channel.stopTyping();
       
    }
    
    exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'osu',
  description: 'Donne vos stats osu',
  usage: 'osu <pseudo>'
};
