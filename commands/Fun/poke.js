const Discord = require('discord.js');

exports.run = (client, message, args) => {

    let defineduser = message.mentions.users.first();
    let user = message.author.username
    message.delete();
    if (!args[0]) {return message.reply(`**Veuillez spécifiez un utilisateur que vous voulez toucher.**`)    
                  }else{
                  
        let reason = args.join(" ").slice(22);    

    let Embed = new Discord.RichEmbed()
    .setTitle('Poke 👉')
    .addField('Tu as juste été toucher.', `Par: ${user}`, true)
    .setColor(0xD4AF37)
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
        usage: 'poke <mention> <raison>'
      };
