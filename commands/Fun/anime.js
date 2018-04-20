const Discord = require('discord.js');
const https = require('http');
const parseXML = require('xml2js').parseString;
const request = require('request');

module.exports.run = (bot, message, args) => {

  var tag = args.join('+');
  var error54 = args.slice(0).join(' ');
  if (!tag || !error54) return message.channel.send(`:pencil: | Pouvez vous refaire la commande en me donnant le nom de l'anime, please ?`)
    request(`https://myanimelist.net/api/anime/search.xml?q=${tag}`, function (error, response, body) {
      if (error!=null) {
        message.channel.send(`:x: | Je n'est rien trouvé sur **${error54}**`);
      }else {
        const parseString = require('xml2js').parseString;
        parseString(body, function (err, result) {
            const decode = require('he').decode;
            var anime = result.anime.entry[0];
            message.channel.send({embed:new Discord.RichEmbed()
                                  .setAuthor(`MyAnimeList`,`https://lh3.googleusercontent.com/gdbHihUd8AA6tpBmnkQ8_hAhyxcEWMhy89Ptl-64adBktV-wj3343StB0Z9LNB0Q7bM=w300`)
              .setTitle(anime.title[0] + ` - Resultat de la recherche`)
              .setURL(`https://myanimelist.net/anime/${anime.id[0]}`)
              .setImage(anime.image[0])
              .addField(`»Synopsis`, decode(anime.synopsis[0].replace(/<[^>]*>/g, ''), false).split('\n')[0])
              .addField(`»Titre englais`,`${anime.english[0]!='' ? anime.english[0] : '­'}`,false)
              .addField(`»Nombre d'episodes`,`${anime.episodes[0]!='' ? anime.episodes[0] : '­'}`,true)
           //   .addField(`External Link:`,`${anime.id[0]!='' ? `[MyAnimeList](https://myanimelist.net/anime/${anime.id[0]})` : '­'}`,true)
              .addField(`»Score`,`${anime.score[0]!='' ? anime.score[0] : '­'}`,true)
              .addField(`»Statuts`,`${anime.status[0]}`,true)
              .addField(`»Type`,`${anime.type[0]}`,true)
              .addField(`»Date de début`, anime.start_date[0], true)
              .addField(`»Date de fin`, anime.end_date[0], true)
              .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
        });
      })}
    }).auth('CCsP', 'BonkRunner124210');
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'anime',
    description: 'Donne votre avatar ( et non celui d\'un autre )',
    usage: 'anime'
  };
