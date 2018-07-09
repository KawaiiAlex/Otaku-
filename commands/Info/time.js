const Discord = require('discord.js');
const moment = require('moment');
exports.run = (client, message, args) => {

    const LogHeure = (`${moment().format('HH')}`)

      const LogMin = (`${moment().format('mm')}`)

      const LogDay = (`${moment().format('DD-MM-YYYY')}`)

      let TimeEmbed = new Discord.RichEmbed()
      .setColor("#689AFB")
      .addField("Nous somme le", LogDay)
      .addField("Il est", LogHeure + " heures et " + LogMin + " minutes.")

      message.channel.send(TimeEmbed)

    }

  
      
      exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['heure'],
        permLevel: 0
      };
      
      exports.help = {
        name: 'time',
        description: 'Donne l\'heure et le jour.',
        usage: 'time'
      };
      
      