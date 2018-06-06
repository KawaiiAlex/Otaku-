const Discord = require('discord.js');
exports.run = (client, message, args) => {

    var rand =  Math.floor(Math.random() * NUM_PAT)
    let defineduser = message.mentions.users.first();
    if(!defineduser) return message.channel.send("Tu dois mentionner quelqu'un")
    var KissEmbed = new Discord.RichEmbed()
    .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
    .setTitle(`${message.author.username} caresse ${defineduser.username}`)
    .setImage(pat[rand].link)
    .setFooter("pat");

    message.channel.send(KissEmbed)
        
}
const NUM_PAT = 6;
// pat Gifs
var pat = [
  {link:'https://media.giphy.com/media/ye7OTQgwmVuVy/giphy.gif'},
  {link:'https://media.giphy.com/media/L2z7dnOduqEow/giphy.gif'},
  {link:'https://media.giphy.com/media/4HP0ddZnNVvKU/giphy.gif'},
  {link:'https://media.giphy.com/media/109ltuoSQT212w/giphy.gif'},
  {link:'https://media.giphy.com/media/lZnEy2UefUZvq/giphy.gif'},
  {link:'https://media.giphy.com/media/r61gZfqvJZMtO/giphy.gif'},
  {link:'https://media.giphy.com/media/SvQ7tWn8zeY2k/giphy.gif'}
];

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'pat',
    description: 'Pour faire des pat au personne que vous souhaitez',
    usage: 'pat [mention]'
  };