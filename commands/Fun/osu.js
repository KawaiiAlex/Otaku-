const osu = require('node-osu');
const osuApi  = new osu.Api('a8fdf4f31ad6f6b0f8f4030d0942bc0411fa1511', {
    // baseUrl: sets the base api url (default: https://osu.ppy.sh/api)
    notFoundAsError: true, // Reject on not found instead of returning nothing. (default: true)
    completeScores: true // When fetching scores also return the beatmap (default: false)
});
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

        if(!args[0]) return message.channel.sendMessage("Donnez un utilisateur valide")
          message.channel.startTyping();
  message.channel.send({files: (`https://lemmmy.pw/osusig/sig.php?colour=pink&uname=${args}&pp=2&countryrank&flagstroke&darktriangles&onlineindicator=undefined&xpbar&xpbarhex`, `banner.png`)})
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
  description: 'Répond a votre question',
  usage: '8ball [question]'
};
