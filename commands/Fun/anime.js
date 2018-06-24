const Discord = require('discord.js');


    const Kitsu = require('kitsu.js')
    const kitsu = new Kitsu()
    
    exports.run = (client, message, args) => {
        let search = args.toString().replace(/,/g, ' ')
        kitsu.searchAnime(search)
            .then(result => {
                if (result.length === 0) {
                    return message.channel.send(`:x: **|** 𝑱𝒆 𝒏'𝒂𝒊 𝒑𝒂𝒔 𝒕𝒓𝒐𝒖𝒗𝒆́ 𝒅𝒆 𝒓𝒆́𝒔𝒖𝒍𝒕𝒂𝒕 𝒑𝒐𝒖𝒓: **${search}** ¯\_(ツ)_/¯`)
                }
                return prepareEmbed(message, result[0])
            })
            .catch(err => {
                console.error(err)
                return message.channel.send(':x: **|** 𝑼𝒏𝒆 𝒆𝒓𝒓𝒆𝒖𝒓 𝒔\'𝒆𝒔𝒕 𝒑𝒓𝒐𝒅𝒖𝒊𝒕𝒆 𝒍𝒐𝒓𝒔 𝒅𝒖 𝒕𝒓𝒂𝒊𝒕𝒆𝒎𝒆𝒏𝒕 𝒅𝒆 𝒍𝒂 𝒓𝒆𝒄𝒉𝒆𝒓𝒄𝒉𝒆, 𝒗𝒆𝒖𝒊𝒍𝒍𝒆𝒛 𝒆𝒏𝒗𝒐𝒚𝒆𝒓 𝒖𝒏 𝒓𝒆𝒑𝒐𝒓𝒕 𝒅𝒆 𝒍𝒂 𝒄𝒐𝒎𝒎𝒂𝒏𝒅𝒆 𝒔𝒊 𝒄𝒆 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 𝒑𝒆𝒓𝒔𝒊𝒔𝒕𝒆 ಠ_ಠ')
            });
    }
    
    function prepareEmbed(message, item) {
        const { slug, synopsis, titles, averageRating, posterImage, episodeCount, showType } = item
        const url = `https://kitsu.io/anime/${slug}`
    
        var AnimeEmbed = new Discord.RichEmbed()
        .setTitle(titles.romaji)
        .setURL(url)
        .setDescription(`**𝑺𝒚𝒏𝒐𝒑𝒔𝒊𝒔:**\n${synopsis.substring(0, 450)}...`)
        .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
        .addField("❯ 𝑻𝒚𝒑𝒆", fixCase(showType), true)
        .addField("❯ 𝑬𝒑𝒊𝒔𝒐𝒅𝒆𝒔", episodeCount, true)
        .addField("❯ 𝑹𝒂𝒕𝒊𝒏𝒈", averageRating, true)
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