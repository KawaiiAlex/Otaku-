const Discord = require("discord.js");

exports.run = async (client, msg) => {

            if (!msg.guild.voiceConnection) {

                if (!msg.member.voiceChannel) return msg.channel.send(':x: | Vous devez être dans un salon-vocal !')

                msg.member.voiceChannel.join()
            }

            if(!msg.guild.voiceConnection.player.dispatcher) return msg.channel.send(':x: | Il n\'y a pas de musique !');

            msg.guild.voiceConnection.player.dispatcher.pause()

            msg.channel.send(':white_check_mark: | J\'ai mis votre musique en pause')
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["p"],
    permLevel: 0
  };
exports.help = {
    name : "pause",
    usage: "pause",
    description: "Mettre la musique en pause"
}
