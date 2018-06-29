const Discord = require('discord.js');


    const Kitsu = require('kitsu.js')
    const kitsu = new Kitsu()
    
    exports.run = (client, message, args) => {
        let search = args.toString().replace(/,/g, ' ')
        kitsu.searchAnime(search)
            .then(result => {
                if (result.length === 0) {
                    return message.channel.send(`:x: **|** Je n'ai pas trouvé de resultat pour: **${search}** ¯\_(ツ)_/¯`)
                }
                return prepareEmbed(message, result[0])
            })
            .catch(err => {
                console.error(err)
                return message.channel.send(':x: **|** Une erreur c\'est produite lors du traitement de la recherche veuillez envoyer un report de la commande si ce message persiste ಠ_ಠ')
            });
    }
    
    function prepareEmbed(message, item) {
        const { slug, synopsis, titles, averageRating, posterImage, episodeCount, showType } = item
        const url = `https://kitsu.io/anime/${slug}`
    
        var AnimeEmbed = new Discord.RichEmbed()
        .setTitle(titles.romaji)
        .setURL(url)
        .setDescription(`**Synopsis:**\n${synopsis.substring(0, 450)}...`)
        .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
        .addField("❯ Type", fixCase(showType), true)
        .addField("❯ Episodes", episodeCount, true)
        .addField("❯ Évaluation", averageRating, true)
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .setThumbnail(posterImage.small)
        .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()
        
        message.channel.send(AnimeEmbed)
    }
    function fixCase(str) {
        return str.toLowerCase().replace(/(^| )(\w)/g, s => s.toUpperCase())
    }
    
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };
      
      exports.help = {
        name: 'anime',
        description: 'Vous donne des infos sur l\'anime de votre choix',
        usage: 'anime <anime a chercher>'
      };
