const Discord = require("discord.js");

exports.run = async (client, msg) => {

            if (!msg.guild.voiceConnection) {

                if (!msg.member.voiceChannel) return msg.channel.send(':x: | Vous devez être dans un salon-vocal !')

                msg.member.voiceChannel.join()
            }

            if(!msg.guild.voiceConnection.player.dispatcher) return msg.channel.send(':x: | Le bot n\'est pas connecté !');

            msg.guild.voiceConnection.player.dispatcher.resume()

            msg.channel.send(':white_check_mark: | La musique a reprise')
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["resume"],
    permLevel: 0
  };
exports.help = {
    name : "resume",
    usage: "resume",
    description: "Remettre la musique en joue"
}
