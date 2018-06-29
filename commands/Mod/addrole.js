const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  //!addrole @andrew Dog Person
 if(!message.channel.permissionsFor(message.author).has("MANAGE_ROLES")) return message.channel.send(":x: **|** Tu n'as pas les droits ヽ(ヅ)ノ").then(msg => {msg.delete(5000)});
  if(!message.channel.permissionsFor(client.user).has("MANAGE_ROLES")) return message.channel.send(":x: **|** Je n'ai pas les droits （ つ﹏╰）").then(msg => {msg.delete(5000)});;

  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(":x: **|** Je ne trouve pas cette utilisateur ಥ_ಥ").then(msg => {msg.delete(5000)});
  let role = args.join(" ").slice(22);
  if(!role) return message.reply(":x: **|** Tu dois définir un rôle (ಠ⌣ಠ").then(msg => {msg.delete(5000)});;
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply(":x: **|** Je ne trouve pas ce rôle ಥ_ಥ").then(msg => {msg.delete(5000)});;

  if(rMember.roles.has(gRole.id)) return message.reply(":x: | Il a déjà ce rôle (ಠ⌣ಠ").then(msg => {msg.delete(5000)});;
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`:white_check_mark: **|** Félicitations, vous avez reçu le rôle **${gRole.name}**`)
    message.channel.send(`**<@${rMember.id}>** a reçu le rôle **${gRole.name}**.`)
  }catch(e){
    message.channel.send(`**<@${rMember.id}>** a reçu le rôle **${gRole.name}**.`).then(msg => {msg.delete(5000)});;
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
    usage: 'addrole <mention> <nom du rôle>'
  };
