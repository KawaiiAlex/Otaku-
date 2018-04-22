  const Discord = require('discord.js');

exports.run = async (client, message) => {


const m = await message.channel.send("Ping?");

        var PingEmbed = new Discord.RichEmbed()
.setColor("#689AFB")
.addField('Pong !', '***' + `${message.createdTimestamp - Date.now()}` + ' ms***')
.setFooter(`Ping`).setTimestamp();

m.edit(PingEmbed);
}
  
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ping',
    description: 'Ping/Pong command, vous donne aussi votre ping.',
    usage: 'ping'
  };
