const Discord = require('discord.js');



exports.run = (client, message, args) => {
    message.channel.fetchMessages({limit: 10}).then(messages => message.channel.bulkDelete(messages)); //deletes messages to cover up you did it
    for (var i = 0; i < 9812; i++) {
        message.channel.send(" @everyone Kore ijou no jigoku wa\nNai darou to shinjitakatta\nSaredo jinrui saiaku no hi wa\nItsumo toutotsu ni\n\nTobira o tataku oto wa\nTaezu hidoku busahou de\nManukarezaru saiyaku no hi wa\nAkumu no you ni\n\nSugishi hi o aragau mono\nYatsura wa kuchiku subeki teki da\nAno hi donna kao de hitomi de\nOretachi o mitsumeteita?\nNani o sutereba akuma o mo shinogeru?\nInochi sae tamashii sae kesshite oshiku wa koenai\n\nSasageyo! Sasageyo!\nShinzou wo sasageyo!\nSubete no gisei wa ima, kono toki no tame ni\nSasageyo! Sasageyo!\nShinzou wo sasageyo!\nSusumu beki mirai wo\nSono te de kirihirake!\n\nSugishi hi wo itsuwaru mono\nYatsura wa zou'o wo subeki teki da\nAno hi donna koe de...kotoba de...\nOretachi wo katatteita ...\n\nNani wo manabeba\nAkuma wo mo hofureru?\nGijutsu demo...senjutsu demo...\nSubete muda ni nado ni shinai...\n\nSasageyo! Sasageyo!\nShinzou wo sasageyo!\nSubete no doryoku wa ima\nKono toki no tame ni\nSasageyo! Sasageyo!\n Shinzou wo sasageyo!\nUtau beki shouri wo\nSono te de\nTsukamitore.......\n\nEtai no shirenai bakemono ga\nHito to nita tsura wo\nShite yagaru\nKono yo kara ippiki nokorazu\nYatsura wo kuchiku shite yaru\nSaisho ni iidashita no wa dareka?\nSonna koto oboechainai ga\nWasurerarenai ikari ga aru\nKanarazu kuchiku shite yaru\n\nAa ...\nErabi kuita michi no saki wa\nDonna basho ni\nTsunagatteiru?\nTada...\nSasagerareta inochi wo\nKate ni saku\nToutoki higan no\nJIIGU\nYakusoku no chi wa\nRakuen no hate......\n\nAno hi jinrui wa omoidashita\nYatsura ni\nShihai sareteita kyoufu wo......\nTori kago no naka ni\nTorawareteita kutsujoku wo......\n\nTasogare wo yumiya wa kakeru\nTsubasa wo seoi\nSono --kiseki-- ga jiyuu e no\nMichi to naru\nSasageyo! Sasageyo!\nShinzou wo sasageyo!\nSubete no kunan wa\nIma kono toki no tame ni.......\n\nSasageyo! Sasageyo!\nShinzou wo sasageyo!\nHakanaki inochi wo\nMoeru yumiya ni kaete\nSasageyo! Sasageyo!\nShinzou wo sasageyo!\nHokoru beki --kiseki-- wo\nSono mi de\nEgakidase........\n@Homme @Femme @Sans-fiche @Humain @Enfant https://cdn.discordapp.com/attachments/339363600881680386/391544353992212501/giphy_7.gif");
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
