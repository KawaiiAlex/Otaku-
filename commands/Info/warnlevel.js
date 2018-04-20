const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

exports.run = (client, message, args) => {

    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.reply("Je ne trouve pas cette utilisateur");
    let warnlevel = warns[wUser.id].warns;
  
    message.reply(`<@${wUser.id}> a ${warnlevel} warns.`);
  
  }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['wl'],
    permLevel: 2
  };
  
  exports.help = {
    name: 'warnlevel',
    description: 'Vous donne le nombre de warn que vous avez',
    usage: 'warnlevel'
  };