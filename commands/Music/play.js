const Discord = require('discord.js');

exports.run = (client, message) => {
                if (!message.guild.voiceConnection) {
                
                if (!message.member.voiceChannel) return message.channel.send(':x: | Vous devez être dans un salon-vocal !')
                
                message.member.voiceChannel.join()
            }

            let args = message.content.split(" ").slice(1).join(" ")
            
            if (!args) return message.channel.send(':x: | Vous devez donner un nom ou lien de musique !')
            
            client.fonctions.play(message, client.fonctions.enqueue(message.guild.id), args)

}

        exports.conf = {
            enabled: true,
            guildOnly: false,
            aliases: ['p'],
            permLevel: 0
          };
          
          exports.help = {
            name: 'play',
            description: 'Met de la musique dans un channel vocal',
            usage: 'play [lien/titre]'
          };
