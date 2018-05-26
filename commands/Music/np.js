const Discord = require("discord.js");
const ytdl = require("ytdl-core");

exports.run = async (client, msg) => {

            if (!msg.guild.voiceConnection) {

                if (!msg.member.voiceChannel) return msg.channel.send(':x: | Vous devez être dans un salon-vocal !')

                msg.member.voiceChannel.join()
            }

            if(!msg.guild.voiceConnection.player.dispatcher || msg.guild.voiceConnection.player.dispatcher.paused) return msg.channel.send(':x: | Il n\'y a pas de musique !');

          let queue = client.fonctions.enqueue(msg.guild.id);

            if (queue.length == 0) return msg.channel.send(":x: | Il n\'y a pas de musique !");

                    ytdl.getInfo(queue[0].link, (err, info) =>{

            let embed = new Discord.RichEmbed()
        .setAuthor(queue[0].title)
        .setThumbnail(queue[0].thumbnails)
        .setColor(0xFF0000)
        .addField("Auteur", queue[0].channelTitle)
        .addField("Description", (queue[0].description ? queue[0].description : "**Pas de description**"))
        .addField("Date de publication", queue[0].publication)
        .addField("Temps", `${Math.floor(msg.guild.voiceConnection.player.dispatcher.time / 60000)}:${Math.floor((msg.guild.voiceConnection.player.dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((msg.guild.voiceConnection.player.dispatcher.time % 60000)/1000) : Math.floor((msg.guild.voiceConnection.player.dispatcher.time % 60000)/1000)}/${client.fonctions.time(info.length_seconds)}`, true)
        .addField('Nombre de vues', info.view_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), true)
        .addField("Lien", queue[0].link)
        .setFooter("Demandé par @" + queue[0].requested);

            msg.channel.send("**:white_check_mark: | Actuellement en écoute:**", embed);
    })

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["nowplaying"],
    permLevel: 0
  };
exports.help = {
    name : "np",
    usage: "np",
    description: "Voir la musique actuellement écoutée"
}
