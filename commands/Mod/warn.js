const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

exports.run = (client, message, args) => {

  //!warn @daeshan <reason>
  if(!message.channel.permissionsFor(message.author).has("KICK_MEMBERS")) return message.reply("Tu n'as pas la permission pour faire ça.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Je ne trouve pas cette utilisateur");
  if(message.channel.permissionsFor(wUser).has("KICK_MEMBERS")) return message.reply("Tu ne peux pas le warn!");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warnings")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("Utilisateur warn", `<@${wUser.id}>`)
  .addField("Warn dans", message.channel)
  .addField("Nombre de warn", warns[wUser.id].warns)
  .addField("Raison", reason);

  let warnchannel = message.guild.channels.find(`name`, "otaku-logs");
  if(!warnchannel) return message.reply("Couldn't find channel");
  warnchannel.send(warnEmbed);
  message.channel.send(":white_check_mark: **| Cette utilisateur c'est fait warn.**");
  
  let embed = new Discord.RichEmbed()
  .setTitle("Warning")
  .addField("Warn par", message.member)
  .addField("Nombre de warn", warns[wUser.id].warns)
  .addField("Raison", reason);
  wUser.send(embed);

  if(warns[wUser.id].warns == 5){
    let muterole = message.guild.roles.find(`name`, "Prison");
    if(!muterole) return message.reply("Le rôle ``prison`` n'existe pas. Je ne peux pas le mute.");
    message.guild.member(wUser).addRole(muterole)
    message.reply(`<@${wUser.id} est mute.`)
  }
   
  if(warns[wUser.id].warns == 10){
    message.guild.member(wUser).kick(reason);
    message.reply(`<@${wUser.id}> est kick.`)
  }

  if(warns[wUser.id].warns == 15){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> est ban.`)
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['w'],
  permLevel: 2
};

exports.help = {
  name: 'warn',
  description: 'Emet un avertissement à l\'utilisateur mentionné.',
  usage: 'warn [mention] [raison]'
};