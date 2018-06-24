const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  if(!message.channel.permissionsFor(message.author).has("MANAGE_ROLES")) return message.channel.send(":x: **|** 𝑻𝒖 𝒏'𝒂𝒔 𝒑𝒂𝒔 𝒍𝒆𝒔 𝒅𝒓𝒐𝒊𝒕𝒔 ヽ(ヅ)ノ").then(msg => {msg.delete(5000)});
  if(!message.channel.permissionsFor(client.user).has("MANAGE_ROLES")) return message.channel.send(":x: **|** 𝑱𝒆 𝒏'𝒂𝒊 𝒑𝒂𝒔 𝒍𝒆𝒔 𝒅𝒓𝒐𝒊𝒕𝒔 （ つ﹏╰）").then(msg => {msg.delete(5000)});;

  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply(":x: **|** 𝑱𝒆 𝒏𝒆 𝒕𝒓𝒐𝒖𝒗𝒆 𝒑𝒂𝒔 𝒄𝒆𝒕𝒕𝒆 𝒖𝒕𝒊𝒍𝒊𝒔𝒂𝒕𝒆𝒖𝒓 ಥ_ಥ").then(msg => {msg.delete(5000)});;;
  let role = args.join(" ").slice(22);
  if(!role) return message.reply(":x: **|** 𝑻𝒖 𝒅𝒐𝒊𝒔 𝒅𝒆́𝒇𝒊𝒏𝒊𝒓 𝒖𝒏 𝒓𝒐̂𝒍𝒆 (ಠ⌣ಠ").then(msg => {msg.delete(5000)});;
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply(":x: **|** 𝑱𝒆 𝒏𝒆 𝒕𝒓𝒐𝒖𝒗𝒆 𝒑𝒂𝒔 𝒄𝒆 𝒓𝒐̂𝒍𝒆 ಥ_ಥ").then(msg => {msg.delete(5000)});;

  if(!rMember.roles.has(gRole.id)) return message.reply(":x: | 𝑰𝒍 𝒏'𝒂 𝒑𝒂𝒔 𝒄𝒆 𝒓𝒐̂𝒍𝒆 (ಠ⌣ಠ").then(msg => {msg.delete(5000)});;
    await(rMember.removeRole(gRole.id));
  
    try{
      await rMember.send(`𝑻𝒖 𝒂𝒔 𝒑𝒆𝒓𝒅𝒖 𝒍𝒆 𝒓𝒐̂𝒍𝒆 **${gRole.name}**.`)
      message.channel.send(`**${rMember}** 𝒂 𝒑𝒆𝒓𝒅𝒖 𝒍𝒆 𝒓𝒐̂𝒍𝒆 **${gRole.name}**`)
    }catch(e){
      message.channel.send(`**<@${rMember.id}>** 𝒂 𝒑𝒆𝒓𝒅𝒖 𝒍𝒆 𝒓𝒐̂𝒍𝒆 **${gRole.name}**`)
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
    usage: 'removerole <mention> <nom du rôle>'
  };