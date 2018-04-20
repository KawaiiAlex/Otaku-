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
        if (process.env.TOKEN && process.env.YTAPI) {
            var config = require('../../config.json')
        } else {
            console.log("No token passed! Exiting...")
            process.exit(0)
        }
    }

        if(language == "fr"){
        if (!message.member.voiceChannel) return message.channel.send('Vous devez être dans un channel vocal').then(response => { response.delete(5000) });
        let player = message.guild.voiceConnection.player.dispatcher
        if (!player) return message.channel.send('Aucune musique ne joue à ce moment.').then(response => { response.delete(5000) });
        if (player.playing) return message.channel.send('La musique joue déjà').then(response => { response.delete(5000) });
        }else{
        if (!message.member.voiceChannel) return message.channel.send('You need to be in a voice channel').then(response => { response.delete(5000) });
        let player = message.guild.voiceConnection.player.dispatcher
        if (!player) return message.channel.send('No music is playing at this time.').then(response => { response.delete(5000) });
        if (player.playing) return message.channel.send('The music is already playing').then(response => { response.delete(5000) });
        }
        var queue = getQueue(message.guild.id);
        player.resume();
        if(language=='fr'){
            message.channel.send("Reprise de la musique ...").then(response => { response.delete(5000) });
        }else{
            message.channel.send("Resuming music...").then(response => { response.delete(5000) });
        }
    }



    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };
      
      exports.help = {
        name: 'resume',
        description: 'Remet la musique en marche',
        usage: 'resume'
      };
