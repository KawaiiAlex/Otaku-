const Discord = require('discord.js');
exports.run = (client, message) => {

    message.channel.send('Le lien est en mp')

        var PingEmbed = new Discord.RichEmbed()
.setColor("#689AFB")
.addField("Voici le lien pour m'ajouter", "https://discordapp.com/oauth2/authorize?client_id=410357219545317376&scope=bot&permissions=2146958591%22")
.setFooter(`invite`).setTimestamp();

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