const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../../util/caseNumber.js');
const {parseUser} = require('../../util/parseUser.js');
const settings = require('../../config.json');
const fs = require("fs");
exports.run = async (client, message, args) => {
    if (message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    };
  }
let prefix = prefixes[message.guild.id].prefixes;
  const user = message.mentions.users.first();
  parseUser(message, user);
  const modlog = client.channels.find('name', 'otaku-logs');
  if (!modlog) return message.reply('Je ne trouve pas le channel otaku-logs.');
  if (message.mentions.users.size < 1) return message.reply('Vous devez mentionner un utilisateur pour ').catch(console.error);

  const reason = args.splice(1, args.length).join(' ') || `Tu dois dire une raison pour warn.`;
  const embed = new RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription(`**Action:** Warning\n**Utilisateur Warn:** ${user.tag}\n**Modérateur:** ${message.author.tag}\n**Raison:** ${reason}`)
  return client.channels.get(modlog.id).send({embed});
  return message.channel.send(":white_check_mark: **| Cette utilisateur c'est fait warn.**");
};


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
