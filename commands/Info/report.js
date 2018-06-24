const Discord = require('discord.js');


exports.run = (client, message, args) => {

  var BugCommand = message.content.substring(8)

      if(!BugCommand) return message.channel.send(":x: **|** 𝑽𝒐𝒖𝒔 𝒅𝒆𝒗𝒆𝒛 𝒔𝒑𝒆𝒄𝒊𝒇𝒊𝒆𝒛 𝒖𝒏 𝒃𝒖𝒈 𝒅𝒖 𝒃𝒐𝒕 𝒐𝒖 𝒖𝒏𝒆 𝒇𝒂𝒖𝒕𝒆 𝒑𝒐𝒖𝒓 𝒓𝒆𝒑𝒐𝒓𝒕 (◦'ںˉ◦)")
  
      let reportEmbed = new Discord.RichEmbed()
      .setDescription("𝑹𝒆𝒑𝒐𝒓𝒕𝒔")
      .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
      .addField("𝑹𝒆𝒑𝒐𝒓𝒕 𝒑𝒂𝒓", `${message.author.tag} ID: ${message.author.id}`)
      .addField("𝑪𝒐𝒎𝒎𝒂𝒏𝒅𝒆 𝒃𝒖𝒈", BugCommand)
      .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()

      client.users.get('281125214098685954').send(reportEmbed).then(message.channel.send("𝑳𝒆 𝒃𝒖𝒈 𝒂̀ 𝒃𝒊𝒆𝒏 𝒆́𝒕𝒆́ 𝒓𝒆𝒑𝒐𝒓𝒕 𝒂𝒖 𝑪𝒓𝒆́𝒂𝒕𝒆𝒖𝒓 𝒅𝒖 𝒃𝒐𝒕 !")).then(msg => {msg.delete(5000)});  

  
  }
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'report',
    description: 'Report un bug du bot',
    usage: 'report <nom de la commande bug>'
  };