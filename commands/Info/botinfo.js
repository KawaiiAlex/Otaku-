const Discord = require('discord.js');
const ms = require("ms");
const moment = require ("moment")
exports.run = (client, message, args) => {
 const ownerBot = client.users.get('281125214098685954').tag;
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
      .setTitle("𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏 𝒔𝒖𝒓 𝒍𝒆 𝒃𝒐𝒕")
      .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
      .setThumbnail(bicon)
      .addField("𝑵𝒐𝒎 𝒅𝒖 𝒃𝒐𝒕", client.user.username, false)
      .addField("𝑩𝒐𝒕 𝒄𝒓𝒆́𝒆́ 𝒍𝒆",`${moment.utc(client.user.createdAt).format("D/M/Y, HH:mm:ss")}`, false )
     // .addField ('𝑴𝒆́𝒎𝒐𝒊𝒓𝒆 𝒖𝒕𝒊𝒍𝒊𝒔𝒆́' , `${Math.round(used * 100) / 100} MB/500MB`, false)
  .addField('𝑳𝒆 𝒃𝒐𝒕 𝒆𝒔𝒕 𝒂𝒍𝒍𝒖𝒎𝒆́ 𝒅𝒆𝒑𝒖𝒊𝒔 :', dateString, false )
              .addField ('𝑳𝒊𝒃𝒓𝒂𝒊𝒓𝒊𝒆', 'Discord.js', false)
  .addField ("𝑰𝑫 𝒅𝒖 𝒃𝒐𝒕 ", client.user.id,false )
      .addField ("𝑪𝒓𝒆́𝒂𝒕𝒆𝒖𝒓 𝒅𝒖 𝒃𝒐𝒕", ownerBot, false)
    .addField ("𝑺𝒆𝒓𝒗𝒆𝒖𝒓 𝒕𝒐𝒕𝒂𝒍", client.guilds.size, false)
  	.addField ("𝑴𝒆𝒎𝒃𝒓𝒆 𝒕𝒐𝒕𝒂𝒍", client.users.size, false)
  	.addField ("𝑳𝒂𝒏𝒈𝒖𝒂𝒈𝒆", "JavaScript", false)
    .addField("𝑨𝒋𝒐𝒖𝒕𝒆𝒓 𝒎𝒐𝒏 𝒃𝒐𝒕", "𝑻𝒖 𝒑𝒆𝒖𝒙 𝒂𝒋𝒐𝒖𝒕𝒆𝒓 𝒎𝒐𝒏 𝒃𝒐𝒕 𝒆𝒏 𝒄𝒍𝒊𝒒𝒖𝒂𝒏𝒕 [𝒊𝒄𝒊](https://discordapp.com/oauth2/authorize?client_id=410357219545317376&scope=bot&permissions=2146958591%22)", false) 
    .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()


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
