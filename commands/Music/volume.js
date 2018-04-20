const Discord = require('discord.js');
const fs = require("fs");
const ytdl = require('ytdl-core');
const search = require('youtube-search');
const config = require("../../config.json");
const queues = {}
const opts = {
    part: 'snippet',
    maxResults: 10,
    key: process.env.YTAPI
}

exports.run = (client, message, args) => {

    var errorlog = require("../../data/errors.json");

    var intent;

    function getQueue(guild) {
        if (!guild) return
        if (typeof guild == 'object') guild = guild.id
        if (queues[guild]) return queues[guild]
        else queues[guild] = []
        return queues[guild]
    }

    try {
        var config = require('../../config.json'),
        language = config.language;
        if (language == "fr") {
        } else if (language == "en") {
        } else {
        }
    } catch (err) {
        console.log(err);
        if(language == 'fr'){
            console.log("No config detected, attempting to use environment variables...");
        }else {
            console.log("No config detected, attempting to use environment variables...");
        }
        if (process.env.MUSIC_BOT_TOKEN && process.env.YOUTUBE_API_KEY) {
            var config = require('../../config.json')
        } else {
            console.log("No token passed! Exiting...")
            process.exit(0)
        }
    }

                let suffix = message.content.split(" ")[1];
                        if(language == "fr"){
            var player = message.guild.voiceConnection.player.dispatcher
            if (!player || player.paused) return message.channel.send('Pas de Musique, Ajouté en avec la commandes `' + prefix + 'play`');
            }else{
            var player = message.guild.voiceConnection.player.dispatcher
            if (!player || player.paused) return message.channel.send('No music m8, queue something with `' + prefix + 'play`');
            }
            if (!suffix) {
                if(language=='fr'){
                    message.channel.send(`Le volume actuelle est de ${(player.volume * 100)}`).then(response => { response.delete(5000) });
                }else{
                    message.channel.send(`The current volume is ${(player.volume * 100)}`).then(response => { response.delete(5000) });
                }
            } else {
                let volumeBefore = player.volume
                let volume = parseInt(suffix);
                if(language=='fr'){
                if (volume > 100) return message.channel.send("La musique ne peut pas être supérieure à 100").then(response => { response.delete(5000) });
                player.setVolume((volume / 100));
                message.channel.send(`Le volume a changé de ${(volumeBefore * 100)} à ${volume}`).then(response => { response.delete(5000) });
                }else{
                if (volume > 100) return message.channel.send("The music can't be higher then 100").then(response => { response.delete(5000) });
                player.setVolume((volume / 100));
                message.channel.send(`Volume changed from ${(volumeBefore * 100)} to ${volume}`).then(response => { response.delete(5000) });
                }
            } 
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
