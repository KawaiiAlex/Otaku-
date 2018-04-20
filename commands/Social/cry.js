const Discord = require('discord.js');
exports.run = (client, message, args) => {

    var rand =  Math.floor(Math.random() * NUM_CRY)
    let defineduser = message.mentions.users.first();

    var CryEmbed = new Discord.RichEmbed()
    .setColor("#689AFB")
    .setTitle(`${message.author.username} pleure de tristesse`)
    .setImage(cry[rand].link)
    .setFooter("cry");

    message.channel.send(CryEmbed)
        
}
const NUM_CRY = 6;
// cry Gifs
var cry = [
  {link:'https://cdn.weeb.sh/images/Syzw78XPZ.gif'},
  {link:'https://cdn.weeb.sh/images/HymMXUQPW.gif'},
  {link:'https://cdn.weeb.sh/images/ryap_aEC-.gif'},
  {link:'https://cdn.weeb.sh/images/SJ-11x5kz.gif'},
  {link:'https://cdn.weeb.sh/images/Bk_fmL7wZ.gif'},
  {link:'https://cdn.weeb.sh/images/rJ5IX8XPZ.gif'}
];

  
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