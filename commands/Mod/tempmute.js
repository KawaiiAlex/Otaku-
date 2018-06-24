const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  if(!message.channel.permissionsFor(message.author).has("MANAGE_ROLES")) return message.channel.send(":x: **|** 𝑻𝒖 𝒏'𝒂𝒔 𝒑𝒂𝒔 𝒍𝒆𝒔 𝒅𝒓𝒐𝒊𝒕𝒔 ヽ(ヅ)ノ").then(msg => {msg.delete(5000)});
  if(!message.channel.permissionsFor(client.user).has("MANAGE_ROLES")) return message.channel.send(":x: **|** 𝑱𝒆 𝒏'𝒂𝒊 𝒑𝒂𝒔 𝒍𝒆𝒔 𝒅𝒓𝒐𝒊𝒕𝒔 （ つ﹏╰）").then(msg => {msg.delete(5000)});;

  if(!tomute) return message.channel.send(":x: **|** 𝑱𝒆 𝒏𝒆 𝒕𝒓𝒐𝒖𝒗𝒆 𝒑𝒂𝒔 𝒄𝒆𝒕𝒕𝒆 𝒖𝒕𝒊𝒍𝒊𝒔𝒂𝒕𝒆𝒖𝒓 ಥ_ಥ").then(msg => {msg.delete(5000)});
  if (tomute.highestRole.position >= message.member.highestRole.position) return message.channel.send(":x: **|** 𝑻𝒖 𝒏𝒆 𝒑𝒆𝒖𝒙 𝒑𝒂𝒔 𝒍𝒆 𝒃𝒂𝒏  (/❛o❛)/").then(msg => {msg.delete(5000)});  


  let mutetime = args[1];
  if(!mutetime) return message.reply("Vous devez définir un temp.");


  let muterole = message.guild.roles.find(`name`, "Prison");
  //start of create role
  if(!muteRole){
    try{
  message.channel.send(":x: **|** 𝑱𝒆 𝒏𝒆 𝒕𝒓𝒐𝒖𝒗𝒆 𝒑𝒂𝒔 𝒍𝒆 𝒓𝒐̂𝒍𝒆 ``Prison`` ಥ_ಥ").then(msg => {msg.delete(3000)});;
  message.channel.send("```\n𝑪𝒓𝒆́𝒂𝒕𝒊𝒐𝒏 𝒅𝒖 𝒓𝒐̂𝒍𝒆...\n```").then(msg => {msg.delete(3000)});;

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
message.channel.send("𝑳𝒆 𝒓𝒐̂𝒍𝒆 ``Prison`` 𝒂 𝒆́𝒕𝒆́ 𝒄𝒓𝒆́𝒆́ 𝒂𝒗𝒆𝒄 𝒔𝒖𝒄𝒄𝒆̀𝒔 !").then(msg => {msg.delete(3000)});;
message.channel.send(":white_check_mark: **|** 𝑽𝒐𝒖𝒔 𝒑𝒐𝒖𝒗𝒆𝒛 𝒓𝒆𝒇𝒂𝒊𝒓𝒆 𝒍𝒂 𝒄𝒐𝒎𝒎𝒂𝒏𝒅𝒆 𝒔'𝒊𝒍 𝒗𝒐𝒖𝒔 𝒑𝒍𝒂𝒊̂𝒕\n\n𝑺𝒊 𝒍𝒆 𝒓𝒐̂𝒍𝒆 𝒏𝒆 𝒎𝒖𝒕𝒆 𝒑𝒂𝒔 𝒍𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒏𝒆 𝒗𝒆𝒖𝒊𝒍𝒍𝒆𝒛 𝒑𝒍𝒂𝒄𝒆𝒓 𝒍𝒆 𝒓𝒐̂𝒍𝒆 𝒂𝒖 𝒅𝒆𝒔𝒔𝒖𝒔 𝒅𝒆𝒔 𝒎𝒆𝒎𝒃𝒓𝒆𝒔 (✿◠‿◠)").then(msg => {msg.delete(5000)});;

//end of create role
}

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> 𝒆𝒔𝒕 𝒎𝒖𝒕𝒆 𝒑𝒆𝒏𝒅𝒂𝒏𝒕 **${ms(ms(mutetime))}**`).then(msg => {msg.delete(ms(mutetime))})

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> 𝒆𝒔𝒕 𝒖𝒏𝒎𝒖𝒕𝒆.`).then(msg => {msg.delete(5000)})
  }, ms(mutetime));


//end of module
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tm'],
  permLevel: 2
};

exports.help = {
  name: 'tempmute',
  description: 'Mute une personne avec une durée définie',
  usage: 'tempmute <mention> <durée>'
};
