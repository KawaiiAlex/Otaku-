const Discord = require('discord.js');
exports.run = (client, message) => {

    message.channel.send('𝑳𝒆 𝒍𝒊𝒆𝒏 𝒆𝒔𝒕 𝒆𝒏 𝒎𝒑')

        var PingEmbed = new Discord.RichEmbed()
.setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
.addField("𝑽𝒐𝒊𝒄𝒊 𝒍𝒆 𝒍𝒊𝒆𝒏 𝒑𝒐𝒖𝒓 𝒎'𝒂𝒋𝒐𝒖𝒕𝒆𝒓", "https://discordapp.com/oauth2/authorize?client_id=410357219545317376&scope=bot&permissions=2146958591%22")
.setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()

message.author.send(PingEmbed)

}
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['invitation'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'invite',
    description: 'Donne le lien pour m\'ajouter sur le serv de votre choix',
    usage: 'invite'
  };