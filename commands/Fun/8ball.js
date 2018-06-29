const Discord = require('discord.js');
exports.run = (client, message, args) => {

  var rand =  Math.floor(Math.random() * NUM_ANS)

  message.channel.send(`:8ball: **|** ${m8ball[rand].reply}, **${message.author.username}**`);
}

const NUM_ANS = 19;
// 8ball
var m8ball = [
  {reply:'C\'est certain'},
  {reply:'Sans aucun doute'},
  {reply:'Oui définitivement'},
  {reply:'Vous pouvez compter sur lui'},
  {reply:'Comme je le vois, oui'},
  {reply:'Problamement'},
  {reply:'Les perspectives sont bonnes'},
  {reply:'Oui'},
  {reply:'Je n\'ai pas compris, essayez à nouveau'},
  {reply:'Demande moi à nouveau plus tard'},
  {reply:'Mieux vaut ne pas vous le dire maintenant'},
  {reply:'Je ne peux pas le dire maintenant'},
  {reply:'Concentrez-vous et demandez moi à nouveau'},
  {reply:"Ne compte pas sur lui"},
  {reply:'Ma réponse est non'},
  {reply:'Mes sources disent non'},
  {reply:'Les perspectives ne sont pas si bonnes'},
  {reply:'Très douteux'},
  {reply:'Non'}
];

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'Je répond a votre question',
  usage: '8ball <question>'
};
