const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  //!addrole @andrew Dog Person
  if(!message.channel.permissionsFor(message.author).has("MANAGE_ROLES")) return message.reply("Désolé, tu ne peux pas faire ça.").then(messages => message.channel.bulkDelete(messages));
  if(!message.channel.permissionsFor(client.user).has("MANAGE_ROLES")) return message.reply("Désolé, je ne peux pas faire ça.").then(messages => message.channel.bulkDelete(messages));
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Impossible de trouver cet utilisateur.").then(messages => message.channel.bulkDelete(messages));
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Spécifiez un rôle!").then(messages => message.channel.bulkDelete(messages));
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Je ne trouve pas ce rôle.").then(messages => message.channel.bulkDelete(messages));

  if(rMember.roles.has(gRole.id)) return message.reply("Il a déja ce rôle.").then(messages => message.channel.bulkDelete(messages));
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Félicitations, vous avez reçu le rôle ${gRole.name}`)
    message.channel.send(`${rMember} a reçu le rôle ${gRole.name}.`)
  }catch(e){
    message.channel.send(`<@${rMember.id}> a reçu le rôle **${gRole.name}**. J'ai essayé de le MP, mais ces MP sont bloqués.`).then(messages => message.channel.bulkDelete(messages))
  }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ar'],
    permLevel: 2
  };
  
  exports.help = {
    name: 'addrole',
    description: 'Donne un rôle a la personne que vous voulez',
    usage: 'addrole [mention] [nom du rôle]'
  };
