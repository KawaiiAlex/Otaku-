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

    let queue = getQueue(message.guild.id);
    if(language =='fr'){
    if (queue.length == 0) return message.channel.send(message, "Pas de musique dans la queue");
    message.channel.send({
        embed: {
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            color: 0x00FF00,
            title: `Lecture actuelle`,
            description: `${queue[0].title} | par ${queue[0].requested}`
        }
    }).then(response => { response.delete(5000) });
    }else{
    if (queue.length == 0) return message.channel.send(message, "No music in queue"); 
    message.channel.send({
        embed: {
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            color: 0x00FF00,
            title: `Currently playing`,
            description: `${queue[0].title} | by ${queue[0].requested}`
        }
    }).then(response => { response.delete(5000) });
    }     
}


    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['np'],
        permLevel: 0
      };
      
      exports.help = {
        name: 'current',
        description: 'Montre la musique en écoute',
        usage: 'current'
      };
