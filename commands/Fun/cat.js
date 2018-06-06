const Discord = require("discord.js");
const superagent = require("superagent");
const randomPuppy = require("random-puppy")

exports.run = async (client,message,args) => {

  randomPuppy('teefies','catpictures','KittenMittens')
  .then(url => {

  let catembed = new Discord.RichEmbed()
  .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
  .setTitle(`${message.author.username} | Ton chaaaat!`)
  .setImage(url);

  message.channel.send(catembed)
  })
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['chat'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'cat',
    description: 'Répète tout ce que vous dîtes',
    usage: 'cat'
  };