const Discord = require("discord.js");

exports.run = async (client, msg) => {

            if (!msg.guild.voiceConnection) {

                if (!msg.member.voiceChannel) return msg.channel.send(':x: | Vous devez être dans un salon-vocal !')

                msg.member.voiceChannel.join()
            }

            if(!msg.guild.voiceConnection.player.dispatcher || msg.guild.voiceConnection.player.dispatcher.paused) return msg.channel.send(':x: | Il n\'y a pas de musique !');

                let queue = client.fonctions.enqueue(msg.guild.id);

                if (queue.length == 0) return message.channel.send(":x: | Il n'y a pas musiques dans la queue !").then(response => { response.delete(5000) });

                 client.fonctions.play(msg, queue, queue[0].link)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["rp"],
    permLevel: 0
  };
exports.help = {
    name : "repeat",
    usage: "repeat",
    description: "Faire répéter la première musique de la file d'attente"
}
