69202a71cf116cfc8b3da4fbe4f0a8f7241767dc

const osu = require('node-osu');
const osuApi  = new osu.Api('a8fdf4f31ad6f6b0f8f4030d0942bc0411fa1511', {
    // baseUrl: sets the base api url (default: https://osu.ppy.sh/api)
    notFoundAsError: true, // Reject on not found instead of returning nothing. (default: true)
    completeScores: true // When fetching scores also return the beatmap (default: false)
});
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

        if(!args[0]) return message.channel.sendMessage("Please specify a valid user!")
        if(args[1] === "recent") {
          message.channel.startTyping();
          osuApi.getUserRecent({u: args[0]}).then(scores => {
            const embed = new Discord.RichEmbed();
            embed.setDescription(`**User**: ${args[0]}\n\n**Title of Beatmap**: ${scores[0][1].title}\n**Score**: ${scores[0][0].score}\n**Perfect?**: ${scores[0][0].perfect == true ? 'Yes.' : 'No.'}\n**Letter Ranking**: ${scores[0][0].rank}`)
            embed.setFooter(`Score achieved on ${scores[0][0].date.toUTCString()}`)
            embed.setColor(0xE25D9B)
            message.channel.sendEmbed(embed)
            message.channel.stopTyping();
          })
        }
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
