const Discord = require('discord.js');
const fs = require("fs");
exports.run = (client, message, args) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

  let defineduser = message.mentions.users.first();

  fs.readFile('./Link/hug.txt', 'utf8', function(err, data) {
      if (err) throw err;
      var random = data.split('\n');
      var num = getRandomInt(random.length);
      var url = random[num];

      if(!defineduser){
        var HugEmbed = new Discord.RichEmbed()
  .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
  .setDescription(`**${message.author.tag}** 𝒄𝒂̂𝒍𝒊𝒏𝒆 **${client.user.tag}**`)
  .setImage(url)
  .setFooter("(っ◔◡◔)っ ♥").setTimestamp();

  message.channel.send(HugEmbed)
      } else {

      var HugEmbed = new Discord.RichEmbed()
  .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
  .setDescription(`**${message.author.tag}** 𝒄𝒂̂𝒍𝒊𝒏𝒆 **${defineduser.tag}**`)
  .setImage(url)
  .setFooter("(っ◔◡◔)っ ♥").setTimestamp();

  message.channel.send(HugEmbed)
      }
});
}

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'hug',
    description: 'Pour faire des calîns au personne que vous souhaitez',
    usage: 'hug [mention ou mot]'
  };
