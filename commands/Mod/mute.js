const {RichEmbed} = require('discord.js');
const fs = require("fs");
const {parseUser} = require('../../util/parseUser');

exports.run = async (client, message, args) => {
  const user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  const muteRole = message.guild.roles.find(`name`, "Prison");

  if(!message.channel.permissionsFor(message.author).has("MANAGE_ROLES")) return message.channel.send(":x: **|** Tu n'as pas les droits ヽ(ヅ)ノ").then(msg => {msg.delete(5000)});
  if(!message.channel.permissionsFor(client.user).has("MANAGE_ROLES")) return message.channel.send(":x: **|** Je n'ai pas les droits （ つ﹏╰）").then(msg => {msg.delete(5000)});;
  if(!user) return message.channel.send(":x: **|** Je ne trouve pas cette utilisateur ಥ_ಥ").then(msg => {msg.delete(5000)});

  if(!muteRole){
      try{
    message.channel.send(":x: **|** Je ne trouve pas le rôle ``Prison`` ಥ_ಥ").then(msg => {msg.delete(3000)});;
    message.channel.send("```\ncréation du rôle...\n```").then(msg => {msg.delete(3000)});;

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
  message.channel.send(":white_check_mark: **|** Vous pouvez refaire la commande s'il vous plaît\n\nSi le rôle ne mute pas la personne. Veuillez placer le rôle au dessus des membres (✿◠‿◠)").then(msg => {msg.delete(10000)});;

//end of create role
  }

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole)
      message.react("💯")
  } else {
    message.guild.member(user).addRole(muteRole)
      message.react("💯")
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
  usage: 'un/mute <mention>'
};
