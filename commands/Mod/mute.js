const {RichEmbed} = require('discord.js');
const fs = require("fs");
const {parseUser} = require('../../util/parseUser');

exports.run = async (client, message, args) => {
  const user = message.mentions.users.first();
  parseUser(message, user);

  const muteRole = message.guild.roles.find(`name`, "Prison");

  if(!muteRole){
      try{
    message.channel.send("Je ne trouve pas le rôle ``Prison``").then(msg => {msg.delete(3000)});;
    message.channel.send("```\nCréation du rôle...\n```").then(msg => {msg.delete(3000)});;

    muteRole = await message.guild.createRole({
      name: "Prison",
      color: "#00000",
      permissions:[]
    })
    message.guild.channels.forEach(async (channel, i) => {
      await channel.permissionOverwrites(muteRole, {
        SEND_MESSAGES: false
      });
    });
  }catch(e){
    console.log(e.stack);
  }
  message.channel.send("Le rôle ``Prison`` a été créé avec succès !").then(msg => {msg.delete(3000)});;
  message.channel.send("Vous pouvez refaire la commande s'il vous plaît").then(msg => {msg.delete(5000)});;

//end of create role
  }
  if (message.mentions.users.size < 1) return message.reply('Vous devez mentionner quelqu\'un pour le mute ou unmute.').then(msg => {msg.delete(5000)});;

  if(!message.channel.permissionsFor(message.author).has("MANAGE_ROLES")) return message.channel.send("Tu n'as pas les droits").then(msg => {msg.delete(5000)});
  if (!message.cahnnel.permissionsFor(client.user).has('MANAGE_ROLES')) return message.reply('Je n\'ai pas les permissions correctes.').then(msg => {msg.delete(5000)});


  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole)
      message.react("🆗")
  } else {
    message.guild.member(user).addRole(muteRole)
      message.react("🆗")
    };
  };



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['unmute'],
  permLevel: 2
};

exports.help = {
  name: 'mute',
  description: 'Mute ou unmute une personne',
  usage: 'un/mute [mention]'
};
