const Discord = require('discord.js');
const fs = require("fs");
exports.run = (client, message, args) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

  let defineduser = message.mentions.users.first();

  fs.readFile('./Link/cry.txt', 'utf8', function(err, data) {
      if (err) throw err;
      var random = data.split('\n');
      var num = getRandomInt(random.length);
      var url = random[num];

  

      var Embed = new Discord.RichEmbed()
  .setColor("#689AFB")
  .setTitle(`**${message.author.username}** pleure de tristesse. **${defineduser.username}**`)
  .setImage(url)
  .setFooter("cry");

  message.channel.send(Embed)
});
}

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'cry',
    description: 'Pour pleurer au personne que vous souhaitez',
    usage: 'cry'
  };
