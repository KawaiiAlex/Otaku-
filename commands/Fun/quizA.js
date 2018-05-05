const Discord = require('discord.js');
const quiz = [
  { q: "Quelle est cette anime ?\n https://cdn.discordapp.com/attachments/437319346541559808/437319859441762304/910a486057eb9a885d3b1e2c208bbe07.jpg", a: ["Fairy Tail", "Ft", "fairy tail", "Fairy tail", "fairy Tail", "ft"] },
  { q: "Quelle est cette anime ?\n https://cdn.discordapp.com/attachments/437319346541559808/437319964156887051/boku_no_hero_academia.jpg", a: ["Boku no hero academia", "Boku No Hero Academia", "boku no hero academia", "BNHA", "bnha", "My Hero Academia", "my hero academia", "mha", "MHA", "My hero academia"] },
  { q: "Quelle est cette anime ?\n https://cdn.discordapp.com/attachments/437319346541559808/437319977465282560/image_6.jpg", a: ["Denpa Onna to Seishun Otoko", "denpa onna to seishun otoko"] },
  { q: "Quelle est cette anime ?\n https://cdn.discordapp.com/attachments/437319346541559808/437320018640764928/image_5.jpg", a: ["Mahouka koukou no rettosei", "Mahouka Koukou No Rettosei", "mahouka koukou no rettosei"] },
  { q: "Quelle est cette anime ?\n https://cdn.discordapp.com/attachments/437319346541559808/437320256973963278/danmachi-ed-eating.png", a: ["Dan machi", "dan machi", "Dan Machi", "dan Machi"] },
  { q: "Quelle est cette anime ?\n https://cdn.discordapp.com/attachments/437319346541559808/437320282936705033/Charlotte.jpg", a:["Charlotte", "charlotte"] },
  { q: "Quelle est cette anime ?\n https://cdn.discordapp.com/attachments/437319346541559808/437320349332275200/no_game_no_life_866713.jpg", a:["No Game No Life", "no game no life", "NGNL", "ngnl"] },
  { q: "Quelle est cette anime ?\n https://cdn.discordapp.com/attachments/437319346541559808/437320361701408769/eromanga.jpg", a:["Eromanga Sensei", "Eromanga sensei", "eromanga sensei", "eromanga Sensei"] },
  { q: "Quelle est cette anime ?\n https://cdn.discordapp.com/attachments/437319346541559808/437320438444589056/telechargement_9.jpg", a:["Kimi no na wa", "kimi no na wa", "Kimi No Na Wa", "KNNW", "knnw"] },
  { q: "Quelle est cette anime ?\n https://cdn.discordapp.com/attachments/437319346541559808/437321273123536927/screenshot-7_1_2016-5_38_14-pm.png", a:["Re:Life", "re:life", "relife", "ReLife", "re life", "Re Life", "rl", "RL"] },
  { q: "Quelle est cette anime ?\n https://cdn.discordapp.com/attachments/437319346541559808/437321485120569365/sao-if_prereg-announcement_2.jpg", a:["Sword Art Online", "sword art online", "SAO", "sao"] },
  { q: "Quelle est cette anime ?\n https://cdn.discordapp.com/attachments/437319346541559808/437322296089247754/In-Another-World-with-my-Smartphone-Titelbild.jpg", a:["isekai wa smartphone to tomo ni", "Isekai Wa Smartphone To Tomo Ni", "In Another World With My Smartphone", "in another world with my smartphone"] },
  { q: "Quelle est cette anime ?\n https://cdn.discordapp.com/attachments/437319346541559808/437324179759431681/Gakusen_toshi_asterisk.jpg", a:["gakuen asterisk", "Gakuen Asterisk", "Gakuen asterisk", "gakuen Asterisk"] },
  { q: "Quelle est cette anime ?\n https://cdn.discordapp.com/attachments/437319346541559808/437324791058530309/maxresdefault_5.jpg", a:["musaigen no phantom world","Musaigen No Phantom World", "mnpw", "MNPW"] },
  { q: "Quelle est cette anime ?\n https://cdn.discordapp.com/attachments/437319346541559808/440952150718152735/image.gif", a:["plastic memories", "Plastic Memories"] },
  { q: "Quelle est cette anime ?\n https://cdn.discordapp.com/attachments/437319346541559808/441620621776912385/food-wars-visuel-anime.jpg", a:["food wars", "Food Wars", "fw", "FW"] }

];

const options = {
  max: 1,
  time: 30000,
  errors: ["time"],
};

exports.run = async (bot, message, args) => {

  const item = Math.floor(Math.random() * quiz);
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
