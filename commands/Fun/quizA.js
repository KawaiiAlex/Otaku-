const Discord = require('discord.js');
const quiz = [
  { q: "Qu'elle est cette anime ?\n https://cdn.discordapp.com/attachments/437319346541559808/437319859441762304/910a486057eb9a885d3b1e2c208bbe07.jpg", a: ["Fairy Tail", "Ft", "fairy tail", "Fairy tail", "fairy Tail", "ft"] },
  { q: "Qu'elle est cette anime ?\n https://cdn.discordapp.com/attachments/437319346541559808/437319964156887051/boku_no_hero_academia.jpg", a: ["Boku no hero academia", "Boku No Hero Academia", "boku no hero academia", "BNHA", "bnha", "My Hero Academia", "my hero academia", "mha", "MHA", "My hero academia"] },
  { q: "Qu'elle est cette anime ?\n https://cdn.discordapp.com/attachments/437319346541559808/437319977465282560/image_6.jpg", a: ["Denpa Onna to Seishun Otoko", "denpa onna to seishun otoko"] },
  { q: "Qu'elle est cette anime ?\n https://cdn.discordapp.com/attachments/437319346541559808/437320018640764928/image_5.jpg", a: ["Mahouka koukou no rettosei", "Mahouka Koukou No Rettosei", "mahouka koukou no rettosei"] },
  { q: "Qu'elle est cette anime ?\n https://cdn.discordapp.com/attachments/437319346541559808/437320256973963278/danmachi-ed-eating.png", a: ["Dan machi", "dan machi", "Dan Machi", "dan Machi"] }
];
const options = {
  max: 1,
  time: 30000,
  errors: ["time"],
};

exports.run = async (bot, message, args) => {

  const item = quiz[Math.floor(Math.random() * quiz.length)];
  await message.channel.send(item.q);
  try {
    const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
    const embed = new Discord.RichEmbed()
    .setAuthor(`Gagnant: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
    .setTitle(`Bonne réponse: \`${winnerMessage.content}\``)
    .setFooter(`Question: ${item.q}`)
    .setColor(message.guild.me.displayHexColor)
    if(args[0] !== winnerMessage.content) return message.channel.send("**BONNE REPONSE !**") + message.channel.send(embed)

  } catch (_) {

    const embedtime = new Discord.RichEmbed()
                                 .setAuthor('Personne n\'a eu la réponse à temps!')
                                 .setTitle(`Bonne réponse: \`${item.a}\``)
                                 .setFooter(`Question: ${item.q}`)
    return message.channel.send(embedtime)
  }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['quiza', 'quizAnime', 'quizanime'],
    permLevel: 0
  };

  exports.help = {
    name: 'quizA',
    description: 'Pose des questions. Vous avez 30 secondes pour répondre.',
    usage: 'quizA'
  };