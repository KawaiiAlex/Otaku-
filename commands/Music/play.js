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

    function getRandomInt(max) {
        return Math.floor(Math.random() * (max + 1));
    }
    
    var paused = {}
    

    function play(message, queue, song) {
        try {
            if (!message || !queue) return;
            if (song) {
                search(song, opts, function(err, results) {
                    if(language == "fr"){
                    if (err) return message.channel.send("Vidéo non trouvée, essayez d'utiliser un lien à youtube à la place."); 
                    }else{
                    if (err) return message.channel.send("Video not found please try to use a youtube link instead.");
                    }
                    song = (song.includes("https://" || "http://")) ? song : results[0].link
                    let stream = ytdl(song, {
                        audioonly: true
                    })
                    let test
                    if (queue.length === 0) test = true
                    queue.push({
                        "title": results[0].title,
                        "requested": message.author.username,
                        "toplay": stream
                    })
                if(language == "fr"){
                
                }else{
            
                }
                message.channel.send({
                    embed: {
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        color: 0x00FF00,
                        title: `Queued`,
                        description: "**" + queue[queue.length - 1].title + "**"
                    }
                        }).then(response => { response.delete(5000) });
                    if (test) {
                        setTimeout(function() {
                            play(message, queue)
                        }, 1000)
                    }
                })
            } else if (queue.length != 0) {
                if(language == 'fr'){
                    message.channel.send({
            embed: {
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                color: 0x00FF00,
                title: `Lecture en cours`,
                description: `**${queue[0].title}** | Demande par ***${queue[0].requested}***`
            }
                }).then(response => { response.delete(5000) });
                let connection = message.guild.voiceConnection
                if (!connection) return console.log("Pas de connexion!");
                intent = connection.playStream(queue[0].toplay)
    
                intent.on('error', () => {
                    queue.shift()
                    play(message, queue)
                })
    
                intent.on('end', () => {
                    queue.shift()
                    play(message, queue)
                })
                }else{
                    message.channel.send({
            embed: {
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                color: 0x00FF00,
                title: `Now Playing`,
                description: `**${queue[0].title}** | Requested by ***${queue[0].requested}***`
            }
                }).then(response => { response.delete(5000) });
                console.log(`Playing ${queue[0].title} as requested by ${queue[0].requested} in ${message.guild.name}`);
                let connection = message.guild.voiceConnection
                if (!connection) return console.log("No Connection!");
                intent = connection.playStream(queue[0].toplay)
    
                intent.on('error', () => {
                    queue.shift()
                    play(message, queue)
                })
    
                intent.on('end', () => {
                    queue.shift()
                    play(message, queue)
                })
                }
            } else {
                if(language == "fr"){
                    message.channel.send('Il n\'y a plus de musique dans la playlist.').then(response => { response.delete(5000) });
                    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
  
                }else{
                    message.channel.send('No more music in queue! Starting autoplaylist').then(response => { response.delete(5000) });
                    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
                  
                }
            }
        } catch (err) {
            if(language =="fr"){
            console.log("BIEN LADS COMPREND QUE QUELQUE FOIS A ÉTÉ MAL! Visitez le serveur de vidéos Joris pour obtenir de l'assistance (https://discord.gg/E8tXHqC) et citez cette erreur:\n\n\n" + err.stack)
            errorlog[String(Object.keys(errorlog).length)] = {
                "code": err.code,
                "error": err,
                "stack": err.stack
            }
            fs.writeFile("./data/errors.json", JSON.stringify(errorlog), function(err) {
                if (err) return console.log("Pire encore, nous ne pouvions pas écrire dans notre fichier journal d'erreur! Assurez-vous que data / errors.json existe toujours!");
            });
            }else{
                console.log("WELL LADS LOOKS LIKE SOMETHING WENT WRONG! Visit Joris vidéo server for support (https://discord.gg/E8tXHqC) and quote this error:\n\n\n" + err.stack)
            errorlog[String(Object.keys(errorlog).length)] = {
                "code": err.code,
                "error": err,
                "stack": err.stack
            }
            fs.writeFile("./data/errors.json", JSON.stringify(errorlog), function(err) {
                if (err) return console.log("Even worse we couldn't write to our error log file! Make sure data/errors.json still exists!");
            });
            }
    
        }
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

    function getQueue(guild) {
        if (!guild) return
        if (typeof guild == 'object') guild = guild.id
        if (queues[guild]) return queues[guild]
        else queues[guild] = []
        return queues[guild]
    }

if (!message.guild.voiceConnection) {
                if(language == "fr"){
                if (!message.member.voiceChannel) return message.channel.send('Vous devez être dans un channel vocal')
                }else{
                if (!message.member.voiceChannel) return message.channel.send('You need to be in a voice channel')
                }
                var chan = message.member.voiceChannel
                chan.join()
            }
            let suffix = message.content.split(" ").slice(1).join(" ")
            if(language == "fr"){
            let suffix = message.content.split(" ").slice(1).join(" ")
            if (!suffix) return message.channel.send('Vous devez spécifier un lien pour le morceau ou un nom de musique!')
            }else{
            if (!suffix) return message.channel.send('You need to specify a song link or a song name!')
            }

            play(message, getQueue(message.guild.id), suffix)
        }


        exports.conf = {
            enabled: true,
            guildOnly: false,
            aliases: ['p'],
            permLevel: 0
          };
          
          exports.help = {
            name: 'play',
            description: 'Met de la musique dans un channel vocal',
            usage: 'play [lien/titre]'
          };
