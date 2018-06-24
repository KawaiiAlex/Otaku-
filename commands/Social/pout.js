const Discord = require('discord.js');
exports.run = (client, message, args) => {

    var rand =  Math.floor(Math.random() * NUM_POUT)
    let defineduser = message.mentions.users.first();

    if(!defineduser) {
      var PoutEmbed = new Discord.RichEmbed()
      .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
      .setDescription(`**${message.author.tag}** 𝒃𝒐𝒖𝒅𝒆 **${client.user.tag}**`)
      .setImage(pout[rand].link)
      .setFooter("<º)))><").setTimestamp();
  
      message.channel.send(PoutEmbed)
    } else {

    
    var PoutEmbed = new Discord.RichEmbed()
    .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
    .setDescription(`**${message.author.tag}** 𝒃𝒐𝒖𝒅𝒆 **${defineduser.tag}**`)
    .setImage(pout[rand].link)
    .setFooter("<º)))><").setTimestamp();

    message.channel.send(PoutEmbed)
    } 
}
const NUM_POUT = 5;
// Kiss Gifs
var pout = [
{link: 'http://pa1.narvii.com/5880/de25826d12fce634d694291a00af43122a23af2b_hq.gif'},
{link: "https://uploads.disquscdn.com/images/483afd92544bee20e84f830b6da7ce862a752e040590f894d66de0562cd17227.gif"},
{link: "https://68.media.tumblr.com/92f87109d279c9e20c9ce523f191dabb/tumblr_o4pc6iBTl61tydz8to1_500.gif"},
{link: "https://68.media.tumblr.com/68b702ab1f085727e3cfcc5509d1d16c/tumblr_og9nynBygL1vuhwqdo1_1280.gif"},
{link: "https://pa1.narvii.com/5939/2251a3e1feeabac7a1c1b254e75b4bd73ad7e544_hq.gif"}
]
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'pout',
    description: 'Pour bouder les gens',
    usage: 'pout [mention ou mot]'
  };