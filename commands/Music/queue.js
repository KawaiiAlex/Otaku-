const Discord = require("discord.js");

exports.run = async (client, msg) => {

            if (!msg.guild.voiceConnection) {

                if (!msg.member.voiceChannel) return msg.channel.send(':x: | Vous devez être dans un salon-vocal !')

                msg.member.voiceChannel.join()
            }

            if(!msg.guild.voiceConnection.player.dispatcher || msg.guild.voiceConnection.player.dispatcher.paused) return msg.channel.send(':x: | Il n\'y a pas de musique !');

          let queue = client.fonctions.enqueue(msg.guild.id);

            if (queue.length == 0) return msg.channel.send(":x: | Il n'y a pas musiques dans la queue !");
            let text = '';
            for (let i = 0; i < queue.length; i++) {
                text += `${(i + 1)}. ${queue[i].title} | "Ajouté par ${queue[i].requested}"\n`
            };
            msg.channel.send(":white_check_mark: | Playlist en cours:text + "```");
            msg.channel.send(`${text}`, {code:'js'});

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["q"],
    permLevel: 0
  };
exports.help = {
    name : "queue",
    usage: "queue",
    description: "Voir la file d'attente de musique du serveur"
}
