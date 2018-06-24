  const Discord = require('discord.js');

exports.run = async (client, message) => {

message.channel.send(`𝑶𝒕𝒂𝒌𝒖 ボット 𝒑𝒊𝒏𝒈! :ping_pong: **${new Date().getTime() - message.createdTimestamp}**𝒎𝒔`);
                     };
  
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ping',
    description: 'Ping/Pong command, vous donne aussi le ping du bot.',
    usage: 'ping'
  };
