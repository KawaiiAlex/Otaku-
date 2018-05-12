const Discord = require('discord.js');
const ms = require("ms");
const moment = require ("moment")
exports.run = (client, message) => {
 const ownerBot = client.users.get('281125214098685954').username
const used = process.memoryUsage().heapUsed / 1024 / 1024;
  let ms = client.uptime;
  let cd = 24 * 60 * 60 * 1000; // Calc days
  let ch = 60 * 60 * 1000; // Calc hours
  let cm = 60 * 1000; // Calc minutes
  let cs = 1000; // Calc seconds
  let days = Math.floor(ms / cd);
  let dms = days * cd; // Days, in ms
  let hours = Math.floor((ms - dms) / ch);
  let hms = hours * ch; // Hours, in ms
  let minutes = Math.floor((ms - dms - hms) / cm);
  let mms = minutes * cm; // Minutes, in ms
  let seconds = Math.round((ms - dms - hms - mms) / cs);
  if (seconds === 60) {
     minutes++; // Increase by 1
     seconds = 0;
  }
  if (minutes === 60) {
     hours++; // Inc by 1
     minutes = 0;
  }
  if (hours === 24) {
     days++; // Increase by 1
     hours = 0;
  }
  let dateStrings = [];

  if (days === 1) {
     dateStrings.push('**1** jour');
  } else if (days > 1) {
     dateStrings.push('**' + String(days) + '** jours');
  }

  if (hours === 1) {
     dateStrings.push('**1** heure' );
  } else if (hours > 1) {
     dateStrings.push('**' + String(hours) + '** heures');
  }

  if (minutes === 1) {
     dateStrings.push('**1** minute');
  } else if (minutes > 1) {
     dateStrings.push('**' + String(minutes) + '** minutes');
  }

  if (seconds === 1) {
     dateStrings.push('**1** seconde');
  } else if (seconds > 1) {
     dateStrings.push('**' + String(seconds) + '** secondes');
  }

  let dateString = '';
  for (let i = 0; i < dateStrings.length - 1; i++) {
     dateString += dateStrings[i];
     dateString += ', ';
  }
  if (dateStrings.length >= 2) {
     dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
     dateString += 'et ';
  }

  dateString += dateStrings[dateStrings.length - 1];
      let bicon = client.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setTitle("Information sur le bot")
      .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
      .setThumbnail(bicon)
      .addField("Nom du bot", client.user.username, false)
      .addField("Bot créé le",`${moment.utc(client.user.createdAt).format("D/M/Y, HH:mm:ss")}`, false )
      .addField ('Mémoire utilisé' , `${Math.round(used * 100) / 100} MB/500MB`, false)
  .addField('Le bot est allumé depuis :', dateString, false )
              .addField ('Librairie', 'Discord.js', false)
  .addField ("ID du bot ", client.user.id,false )
      .addField ("Créateur du bot", ownerBot, false)
    .addField ("Serveur total", client.guilds.size, false)
  	.addField ("Membre total", client.users.size, false)
  	.addField ("Langage", "JavaScript", false)
    .addField("Ajouter mon bot", "Tu peux ajouter mon bot en cliquant [ici](https://discordapp.com/oauth2/authorize?client_id=410357219545317376&scope=bot&permissions=2146958591%22)", false)
    .setFooter("๖̶̶̶ζ͜͡Bot par Kawaii Alex ͜͡ζ̶̶̶๖", client.users.get('281125214098685954').displayAvatarURL, false);


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
