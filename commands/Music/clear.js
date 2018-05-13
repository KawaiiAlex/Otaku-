const Discord = require("discord.js");

exports.run = async (client, msg) => {

            if (!msg.guild.voiceConnection) {

                if (!msg.member.voiceChannel) return msg.channel.send(':x: | Vous devez être dans un salon-vocal !')

                msg.member.voiceChannel.join()
            }

            if(!msg.guild.voiceConnection.player.dispatcher || msg.guild.voiceConnection.player.dispatcher.paused) return msg.channel.send(':x: | Il n\'y a pas de musique !');

          let queue = client.fonctions.enqueue(msg.guild.id);

            if (queue.length == 0) return msg.channel.send(":x: | Il n'y a pas de musique dans la queue");

                msg.channel.send(":white_check_mark: | La queue actuelle a été supprimé");

                for (var i = queue.length - 1; i >= 0; i--) {
                    if (queue.length == 1) return;
                    queue.splice(i, 1);
                }


}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["c"],
    permLevel: 0
  };

  exports.help = {
    name: 'clear',
    description: 'Enlève toute les musiques',
    usage: 'clear'
  };
