const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require('discord.js');


exports.run = (client, message, args) => {
  if (!message.channel.nsfw) return message.channel.send(":underage: **|** 𝑪𝒆 𝒏'𝒆𝒔𝒕 𝒑𝒂𝒔 𝒖𝒏 𝒄𝒉𝒂𝒏𝒏𝒆𝒍 𝒏𝒔𝒘𝒇 ¯\_(͡° ͜ʖ ͡°)_/¯")
    var text = message.content.substring(6)

    if(message.author.bot) return;
    if(message.channel.type !=="text") return;
    
     randomPuppy('anal_gifs','porn_gifs','creampiegifs','cumcoveredfucking','homemadexxx')
    .then(url => {
                  const embed = new Discord.RichEmbed()
                      .setTimestamp()
                      .setImage(url)
                      .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
                      .setFooter("(͡° ͜ʖ ͡°)").setTimestamp();
                      message.channel.send(`<@${message.author.id}> 𝒃𝒂𝒊𝒔𝒆 ${text}`)
                       message.channel.send({ embed });
    })

  }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'fuck',
    description: 'Envoie une image aléatoire de pénis',
    usage: 'fuck'
  };