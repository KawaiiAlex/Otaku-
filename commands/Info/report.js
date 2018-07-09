const Discord = require('discord.js');


exports.run = (client, message, args) => {

      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("Je ne trouve pas cette utilisateur").then(msg => {msg.delete(5000)});
      let rreason = args.join(" ").slice(22);
  
      let reportEmbed = new Discord.RichEmbed()
      .setDescription("Reports")
      .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
      .addField("Utilisateur report", `${rUser} with ID: ${rUser.id}`)
      .addField("Report par", `${message.author} with ID: ${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Raison", rreason)
      .setFooter("Report").setTimestamp();
  
      let reportschannel = message.guild.channels.find(`name`, "otaku-logs");
      if(!reportschannel) return message.channel.send("Je ne trouve pas le channel ``otaku-logs``").then(msg => {msg.delete(5000)});
  
  
      message.delete().catch(O_o=>{});
      reportschannel.send(reportEmbed);
  
  }
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'report',
    description: 'Report une personne pour avertir les haut gradés',
    usage: 'report [mention] <raison>'
  };