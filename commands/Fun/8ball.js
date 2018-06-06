const Discord = require('discord.js');
exports.run = (client, message, args) => {

  var rand =  Math.floor(Math.random() * NUM_ANS)
  var text = message.content.substring(6)

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#42f453")
  .addField("🎱Question", text)
  .addField("🎱Réponse", m8ball[rand].reply);
  message.channel.send(`:8ball: | ${m8ball[rand].reply}, **${message.author.username}**`);
}

const NUM_ANS = 19;
// 8ball
var m8ball = [
  {reply:'C\'est certain'},
  {reply:'Sans aucun doute'},
  {reply:'Oui définitivement'},
  {reply:'Vous pouvez compter sur lui'},
  {reply:'Comme je le vois, oui'},
  {reply:'Probablement'},
  {reply:'Les perspectives sont bonnes'},
  {reply:'Oui'},
  {reply:'Les signes disent oui'},
  {reply:'Pas compris, essayez à nouveau'},
  {reply:'Demander à nouveau plus tard'},
  {reply:'Mieux vaut ne pas vous dire maintenant'},
  {reply:'Je ne peux pas le prédire maintenant'},
  {reply:'Concentrez-vous et demandez à nouveau'},
  {reply:"Ne compte pas sur lui"},
  {reply:'Ma réponse est non'},
  {reply:'Mes sources disent non'},
  {reply:'Les perspectives ne sont pas si bonnes'},
  {reply:'Très douteux'}
];

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'Répond a votre question',
  usage: '8ball [question]'
};
