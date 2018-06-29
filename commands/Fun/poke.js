const Discord = require('discord.js');

exports.run = (client, message, args) => {

    let defineduser = message.mentions.users.first();
    let user = message.author.username
    message.delete();
    if (!args[0]) {return message.reply(`:x: **|** Veuillez spécifier un utilisateur que vous voulez toucher (͡° ͜ʖ ͡°)`)    
                  }else{

    let Embed = new Discord.RichEmbed()
    .setTitle('Poke (╭☞⚆ᗜ⚆)╭☞')
    .addField('Tu as juste été touché', `Par: ${user}`, true)
    .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
    .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()
    defineduser.send(Embed)
                  }
}    


    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['touche'],
        permLevel: 0
      };
      
      exports.help = {
        name: 'poke',
        description: 'Touche quelqu\'un... rien de plus x)',
        usage: 'poke <mention>'
      };
