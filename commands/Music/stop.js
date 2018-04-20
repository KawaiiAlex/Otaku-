const Discord = require('discord.js');
const YTDL = require("ytdl-core");

exports.run = (client, message, args) => {

    var servers = {};

    var server = servers[message.guild.id];

    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'stop',
    description: 'Arrete la musique',
    usage: 'stop'
  };
