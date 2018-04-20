const Discord = require("discord.js");
exports.run = async (client, message, args) => {

    if(!message.channel.permissionsFor(message.author).has("MANAGE_ROLES")) return message.reply("Désolé, tu ne peux pas faire ça.");
    if(!message.channel.permissionsFor(client.user).has("MANAGE_ROLES")) return message.reply("Désolé, je ne peux pas faire ça.");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Impossible de trouver cette utilisateur.");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Specifiez un rôle!");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Je ne trouve pas ce rôle");
  
    if(!rMember.roles.has(gRole.id)) return message.reply("Il n'a pas ce rôle");
    await(rMember.removeRole(gRole.id));
  
    try{
      await rMember.send(`RIP, tu as perdu le rôle ${gRole.name}.`)
      message.channel.send(`RIP, ${rMember} a perdu le rôle ${gRole.name}`)
    }catch(e){
      message.channel.send(`RIP <@${rMember.id}>, il a perdu le rôle **${gRole.name}**. J'ai essayé de le MP, mais ces MP sont bloqués.`)
    }
  }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rr'],
    permLevel: 2
  };
  
  exports.help = {
    name: 'removerole',
    description: 'Enlever un rôle a la personne que vous voulez',
    usage: 'removerole [mention] [nom du rôle]'
  };