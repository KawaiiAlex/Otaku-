const Discord = require('discord.js');
const {RichEmbed} = require('discord.js');
exports.run = (client, message, args) => {  
  
  if(message.channel.type === "dm") return;

        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")){return message.reply(":x: | Vous n'avez pas les perms").catch(console.error);

      }else{

        let args4 = message.content.split(' ');
        let time = args4[1];
        let timeofreminder = message.content.slice(2, args.length);

        function reminder (remind, toRemind) {

          if(!time){
            message.channel.send(`:x: | Mauvais format. Faite: ***${prefix}reminder <temp en seconde> <message>***`);
          }else{
            if(message.content.includes("reminder end")){

              setInterval(function() {

                message.channel.send();


              }, (time * 1000));
              message.channel.send(":white_check_mark: | **Reminder arreté avec succès**");
            }else{

              setInterval(function() {

                message.channel.send(message.content.slice(message.content.indexOf(message.content.split(" ")[2])));
              }, (time * 1000));

              message.channel.send(`:white_check_mark: | **Reminder mis !**\nUtilise ***${prefix}rstop*** pour arreter le reminder`);
            }
          }
        }
        reminder(time, timeofreminder);
      }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'reminder',
  description: 'Ban l\'utilisateur mentionné',
  usage: 'reminder [temp en seconde] [message]'
};
