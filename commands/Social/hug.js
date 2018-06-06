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

  

      var HugEmbed = new Discord.RichEmbed()
  .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
  .setTitle(`**${message.author.username}** câline **${defineduser.username}**`)
  .setImage(url)
  .setFooter("hug");

  message.channel.send(HugEmbed)
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
