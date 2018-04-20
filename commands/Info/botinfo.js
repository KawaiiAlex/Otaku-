const Discord = require('discord.js');
exports.run = (client, message) => {

    let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information \nVous pouvez aussi rejoindre le serveur de mon créateur via cette commande : ``//Otaku`` ou m'ajouter avec ``//invite``")
    .setColor("#689AFB")
    .setThumbnail(bicon)
  	.addField("Nom du bot", client.user.username, false)
    .addField("Créé le", client.user.createdAt,false )
  	.addField ("ID", client.user.id,false )
    .addField ("Serveur total", client.guilds.size, false)
  	.addField ("Membre total", client.users.size, false)
  	.addField ("Langage", "JavaScript", false)
    .setFooter("๖̶̶̶ζ͜͡Bot par Kawaii Alex ͜͡ζ̶̶̶๖", client.users.get('281125214098685954').displayAvatarURL);


    message.channel.send(botembed);
}
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bi'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'botinfo',
    description: 'Vous donne les infos du bot',
    usage: 'botinfo'
  };