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

    if (!message.guild.voiceConnection) {
        console.log('leave');
            if(language == "fr"){
            if (!message.member.voiceChannel) return message.channel.send('Vous devez être dans un channel vocal')
            }else{
            if (!message.member.voiceChannel) return message.channel.send('You need to be in a voice channel')
            }
            if(language == "fr"){
                message.member.voiceChannel.leave();
            let queue = getQueue(message.guild.id);
            if (queue.length == 0) return message.channel.send(`Pas de music dans la queue`).then(response => { response.delete(5000) });
            for (var i = queue.length - 1; i >= 0; i--) {
                queue.splice(i, 1);
            }
            message.channel.send(`La file d'attente à bien été effacer`).then(response => { response.delete(5000) });

            }else{
                message.member.voiceChannel.leave();
            let queue = getQueue(message.guild.id);
            if (queue.length == 0) return message.channel.send(`No music in queue`).then(response => { response.delete(5000) });
            for (var i = queue.length - 1; i >= 0; i--) {
                queue.splice(i, 1);
            }
            message.channel.send(`Cleared the queue`).then(response => { response.delete(5000) });
        }
        }
    }




    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['l'],
        permLevel: 0
      };
      
      exports.help = {
        name: 'leave',
        description: 'Déconnecte le bot',
        usage: 'leave'
      };
