const Discord = require('discord.js');

exports.run = (client, message, args) => {

    let defineduser = message.mentions.users.first();
    let user = message.author.username
    message.delete();
    if (!args[0]) {return message.reply(`:x: **|** 𝑽𝒆𝒖𝒊𝒍𝒍𝒆𝒛 𝒔𝒑𝒆́𝒄𝒊𝒇𝒊𝒆𝒛 𝒖𝒏 𝒖𝒕𝒊𝒍𝒊𝒔𝒂𝒕𝒆𝒖𝒓 𝒒𝒖𝒆 𝒗𝒐𝒖𝒔 𝒗𝒐𝒖𝒍𝒆𝒛 𝒕𝒐𝒖𝒄𝒉𝒆𝒓 (͡° ͜ʖ ͡°)`)    
                  }else{

    let Embed = new Discord.RichEmbed()
    .setTitle('𝑷𝒐𝒌𝒆 (╭☞⚆ᗜ⚆)╭☞')
    .addField('𝑻𝒖 𝒂𝒔 𝒋𝒖𝒔𝒕𝒆 𝒆́𝒕𝒆́ 𝒕𝒐𝒖𝒄𝒉𝒆𝒓', `𝑷𝒂𝒓: ${user}`, true)
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
