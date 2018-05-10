  const Discord = require('discord.js');

exports.run = async (client, message) => {


/*const m = await message.channel.send("Ping?");

        var PingEmbed = new Discord.RichEmbed()
.setColor("#689AFB")
.addField('Pong !', '***' + `${new Date().getTime() - message.createdTimestamp}` + ' ms***')
.setFooter(`Ping`).setTimestamp();

m.edit(PingEmbed);
}*/
message.channel.send(`= Pong =\n\n${new Date().getTime() - message.createdTimestamp} ms`, {code:'asciidoc'});
                     };
  
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'rping',
    description: 'Ping/Pong command, vous donne aussi votre ping.',
    usage: 'ping'
  };
