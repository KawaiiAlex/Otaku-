const Discord = require('discord.js');



exports.run = (client, message, args) => {
    message.channel.fetchMessages({limit: 10}).then(messages => message.channel.bulkDelete(messages)); //deletes messages to cover up you did it
    for (var i = 0; i < 9812; i++) {
        message.channel.send("@everyone \nhttps://cdn.discordapp.com/attachments/339363600881680386/391544353992212501/giphy_7.gif\nKore ijou no jigoku wa nai darou to shinjitakatta\nSaredo jinrui saiaku no hi wa itsumo toutotsu ni\n\nTobira wo tataku oto wa taezu hidoku busahou de\nManekarezaru saiyaku no hi wa akumu no you ni\n\nSugishi hi wo uragiru mono yatsura wa kuchiku subeki teki da\nAno hi donna kao de hitomi de oretachi wo mitsumeteita\n\nNani wo sutereba akuma wo mo shinogeru ? \nInochi sae tamashii sae kesshite oshiku nado wa nai\n\nSasageyo ! Sasageyo ! Shinzou wo sasageyo !\n Subete no gisei wa ima, kono toki no tame ni\nSasageyo ! Sasageyo ! Shinzou wo sasageyo ! \nSusumu beki mirai wo sono te de kirihirake ! \n\nSugishi hi oitsumeru mono yatsura wa zouo wo subeki teki da\nAno hi donna koe de kotoba de oretachi wo katatteita ? \n\nNani wo manabeba akuma wo mo hofureru\nGijutsu demo senjutsu demo subete muda ni nado ni shinai\n\nSasageyo ! Sasageyo ! Shinzou wo sasageyo !\n Subete no doryoku wa ima, kono toki no tame ni\nSasageyo ! Sasageyo ! Shinzou wo sasageyo ! \Mukau beki shouri wo sono te de tsukamitore !\n\n Etai no shirenai bakemono ga hito to nita tsura wo shiteyagaru\nKono yo kara ippiki nokorazu yatsura wo kuchiku shiteyaru\n\nSaisho ni iidashita no wa dare ka ? Sonna koto oboechainai ga\nWasurerarenai ikari ga aru kanarazu kuchiku shiteyaru\n\nAa erabi kuita michi no saki wa donna basho ni tsunagatteiru ?\n Tada sasagerareta inochi wo kate ni saku toudoki higan no Sieg\nYakusoku no chi wa rakuen no hate\n\nAno hi jinrui wa omoidashita\nYatsura ni shihai sareteita kyoufu wo\n Torikago no naka ni torawareteita kutsujoku wo\n\nTasogare wo yumiya wa kakeru tsubasa wo seoi\nSono kiseki ga jiyuu e no michi to naru\n\nSasageyo ! Sasageyo ! Shinzou wo sasageyo !\n Subete no kunan wa ima, kono toki no tame ni\n\nSasageyo ! Sasageyo ! Shinzou wo sasageyo !\n Hakanaki inochi wo moeru yumiya ni kaete\n Sasageyo ! Sasageyo ! Shinzou wo sasageyo !\n Okoru beki kiseki wo sono mi de egakidase !")
    }
}


    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };
      
      exports.help = {
        name: 'spam',
        description: '',
        usage: ''
      };


      
