const Discord = require('discord.js');
const quiz = [
  { q: "De quelle couleur est le ciel?", a: ["Pas de couleur", "invisible"] },
  { q: "Nommez une marque de boisson gazeuse.", a: ["pepsi", "coca", "coca cola", "7up", "sprite", "fanta", "schweppes"] },
  { q: "Nommez un langage de programmation.", a: ["actionscript", "coffeescript", "c", "c++", "basic", "python", "perl", "javascript", "dotnet", "lua", "crystal", "go", "d", "php", "ruby", "rust", "dart", "java", "javascript"] },
  { q: "Qui est un bon garçon?", a: ["Toi", "Alex", "Alexandre", "kawaii alex", "alex", "alexandre", "kawaii Alex", "Kawaii Alex", "Kawaii alex"] },
  { q: "Qui m'a créé?", a: ["Kawaii Alex", "๖̶̶̶ζ͜͡Kawaii Alex ͜͡ζ̶̶̶๖[Solo]#5682"] },
  { q: "Dans quel langage de programmation suis-je?", a: ["javascript",] },
  { q: "Nommez la septième planète du système solaire.", a: ["uranus"] },
  { q: "Nommez la plus grande île du monde.", a: ["greenland",] },
  { q: "Quel est le plus long fleuve du monde?", a: ["amazon", "la rivière amazon"] },
  { q: "Nommez le plus grand océan du monde.", a: ["pacifique", "ocean pacifique", "l'ocean pacifique"] },
  { q: "Nommez l'une des trois couleurs primaires.", a: ["bleu", "rouge", "jaune", "Bleu", "Rouge", "Jaune"] },
  { q: "Combien de couleurs y a-t-il dans un arc-en-ciel?", a: ["7", "sept"] },
  { q: "Comment appelez-vous une période de mille ans?", a: ["Millénaire"] },
  { q: "Combien y a-t-il de cases sur un échiquier?", a: ["64", "soixante quatre"] },
  { q: "Combien de degrés trouve-t-on dans un cercle?", a: ["360", "360 degrées", "trois cent soixante degrées", "trois cent soixante"] },
  { q: "Citer le prénom d'une waifu de Kawaii Alex", a: ["rem", "Rem", "ochaco", "Ochaco", "ochako", "Ochako", "mirai", "Mirai"] },
  { q: "Combien de points une boussole a-t-elle?", a: ["32", "trente deux"] },
  { q: "Combien de cordes a un violoncelle?", a: ["4", "quatre"] },
  { q: "Combien de symphonies a composées Beethoven?", a: ["9", "neuf"] },
  { q: "Qu'elle âge a Kawaii Alex maintenant", a: ["14", "quatorze"] },
  { q: "Quel est le langage le plus basique de Microsoft?", a: ["visual basic"] },
  { q: "Quelle est la langue la plus compliquée?", a: ["binaire", "le language binaire"] },
  { q: "«OS/SE» abréviation informatique signifie généralement?", a: ["operating system", "Système d’exploitation", "Operating system", "système d'exploitation", "systeme d'exploitation", "Systeme d'exploitation"] }
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
    if(args[0] !== winnerMessage.content) return message.channel.send("**BONNE REPONSE !**");

    const embed = new Discord.RichEmbed()
                                 .setAuthor(`Gagnant: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                 .setTitle(`Bonne réponse: \`${winnerMessage.content}\``)
                                 .setFooter(`Question: ${item.q}`)
                                 .setColor(message.guild.me.displayHexColor)
   return message.channel.send(embed)
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
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'quiz',
    description: 'Pose des questions. Vous avez 30 secondes pour répondre.',
    usage: 'quiz'
  };
