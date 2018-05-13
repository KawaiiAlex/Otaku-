const Discord = require("discord.js");

exports.run = async (client, msg) => {

            if (!msg.guild.voiceConnection) {

                if (!msg.member.voiceChannel) return msg.channel.send(':x: | Vous devez être dans un salon-vocal !')

            }

                msg.member.voiceChannel.leave();

            let queue = client.fonctions.enqueue(msg.guild.id);

                msg.channel.send(`:white_check_mark: | Musique stopper et bot déconnecté !`);

                if (queue.length == 0) return;

                for (var i = queue.length - 1; i >= 0; i--) {
                    queue.splice(i, 1);
                }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["l"],
    permLevel: 0
  };

  exports.help = {
    name: 'leave',
    description: 'Fait quitte le salon vocal du bot',
    usage: 'leave'
  };
