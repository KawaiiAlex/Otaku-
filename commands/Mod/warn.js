const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js');
const {parseUser} = require('../util/parseUser.js');
const settings = require('../settings.json');
exports.run = async (client, message, args) => {
  const user = message.mentions.users.first();
  parseUser(message, user);
  const modlog = client.channels.find('name', 'otaku-logs');
  const caseNum = await caseNumber(client, modlog);
  if (!modlog) return message.reply('Je ne trouve pas le channel otaku-logs.');
  if (message.mentions.users.size < 1) return message.reply('Vous devez mentionner un utilisateur pour ').catch(console.error);

  const reason = args.splice(1, args.length).join(' ') || `Tu dois dire une raison pour warn.`;
  const embed = new RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription(`**Action:** Warning\n**Utilisateur Warn:** ${user.tag}\n**Modérateur:** ${message.author.tag}\n**Raison:** ${reason}`)
  .setFooter(`Case ${caseNum}`);
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
