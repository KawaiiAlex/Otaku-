const Discord = require("discord.js");

exports.run = async (client, msg) => {

            if (!msg.guild.voiceConnection) {

                if (!msg.member.voiceChannel) return msg.channel.send(':x: | Vous devez être dans un salon-vocal !')

                msg.member.voiceChannel.join()
            }

		if(!msg.guild.voiceConnection.player.dispatcher || msg.guild.voiceConnection.player.dispatcher.paused) return msg.channel.send(':x: | Il n\'y a pas de musique !');

        let args = msg.content.split(" ");

    if (parseInt(args[1]) > 100) return msg.channel.send(":x: | Le volume est déjà au max !");

    msg.guild.voiceConnection.player.dispatcher.setVolume((parseInt(args[1]) / 100));

    msg.channel.send(":white_check_mark: | Le volume est désormais à ***"+ parseInt(args[1]) + "/100***");

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['v'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'volume',
    description: 'Change le volume de la musique',
    usage: 'volume <volume entre 0 et 100>'
  };
