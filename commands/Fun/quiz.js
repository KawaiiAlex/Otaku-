const Discord = require('discord.js');
const quiz = [
  { q: "De qu'elle couleur est le ciel?", a: ["Pas de couleur", "invisible"] },
  { q: "Nommez une marque de boisson gazeuse.", a: ["pepsi", "coca", "coca cola", "7up", "sprite", "fanta", "schweppes"] },
  { q: "Nommez un langage de programmation.", a: ["actionscript", "coffeescript", "c", "c++", "basic", "python", "perl", "javascript", "dotnet", "lua", "crystal", "go", "d", "php", "ruby", "rust", "dart", "java", "javascript"] },
  { q: "Qui est un bon garçon?", a: ["Toi", "Alex", "Alexandre", "kawaii alex", "alex", "alexandre", "kawaii Alex", "Kawaii Alex", "Kawaii alex"] },
  { q: "Dans quel langage de programmation suis-je?", a: ["javascript",] },
  { q: "Nommez la septième planète du système solaire.", a: ["uranus"] },
  { q: "Nommez la plus grande île du monde.", a: ["greenland",] },
  { q: "Quel est le plus long fleuve du monde?", a: ["amazon", "la rivière amazon"] },
  { q: "Nommez le plus grand océan du monde.", a: ["pacifique", "ocean pacifique", "l'ocean pacifique"] },
  { q: "Nommez l'une des trois couleurs du monde.", a: ["bleu", "rouge", "jaune", "Bleu", "Rouge", "Jaune"] },
  { q: "Combien de couleurs y a-t-il dans un arc-en-ciel?", a: ["7", "sept"] },
  { q: "Combien y a-t-il de case dans un échiquier?", a: ["64", "soixante quatre"] },
  { q: "Combien de degrés trouve t'on dans un cercle?", a: ["360", "360 degrées", "trois cent soixante degrées", "trois cent soixante"] },
  { q: "Citer le prénom d'une wiafu de Kawaii Alex", a: ["rem", "Rem", "ochaco", "Ochaco", "ochako", "Ochako", "mirai", "Mirai"] },
  { q: "Combien de points une boussole a-t-elle?", a: ["32", "trente deux"] },
  { q: "Combien de corde a un violoncelle?", a: ["4", "quatre"] },
  { q: "Combien de symphonies a composées Beethoven ?", a: ["9", "neuf"] },
  { q: "Qu'elle âge a Kawaii Alex maintenant ?", a: ["14", "quatorze"] },
  { q: "Quel est le langage le plus basique de Microsoft ?", a: ["visual basic"] },
  { q: "Qu'elle est le langage le plus compliquée ?", a: ["binaire", "le language binaire"] },
  { q: "«OS/SE» abrévation informatique signifie généralement ?", a: ["operating system", "Système d’exploitation", "Operating system", "système d'exploitation", "systeme d'exploitation", "Systeme d'exploitation"] }
];
const options = {
  max: 1,
  time: 30000,
  errors: ["time"],
};

exports.run = async (bot, message, args) => {

  const item = quiz[Math.floor(Math.random() * quiz.length)];
  message.delete().catch();
  await message.channel.send(item.q);
  try {
    const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
    const embed = new Discord.RichEmbed()
    .setAuthor(`Gagnant: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
    .setTitle(`Bonne réponse: \`${winnerMessage.content}\``)
    .setFooter(`Question: ${item.q}`)
    .setColor(message.guild.me.displayHexColor)
    if(args[0] !== winnerMessage.content) return message.channel.send("BONNE REPONSE ヽ༼ຈل͜ຈ༽ﾉ !") + message.channel.send(embed)

  } catch (_) {

    const embedtime = new Discord.RichEmbed()
                                 .setAuthor('Personne n\'a eu la réponse à temps ヽ(ヅ)ノ !')
                                 .setTitle(`Bonne réponse: \`${item.a}\``)
                                 .setFooter(`Question: ${item.q}`)
    return message.channel.send(embedtime)
  }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['quizG'],
    permLevel: 0
  };

  exports.help = {
    name: 'quizg',
    description: 'Pose des questions. Vous avez 30 secondes pour répondre.',
    usage: 'quizg'
  };

