const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Je ne trouve pas cette utilisateur.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous ne pouvez pas le mute.");
  let muterole = message.guild.roles.find(`name`, "Prison");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Prison",
        color: "#00000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Vous devez définir un temp.");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> est mute pendant ${ms(ms(mutetime))}.`).then(msg => {msg.delete(ms(mutetime))})

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> est unmute.`).then(msg => {msg.delete(10000)})
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
