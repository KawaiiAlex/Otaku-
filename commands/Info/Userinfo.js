const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const ms = require('ms');
const sm = require("string-similarity");


exports.run = async (client, message, args) => {

    if(message.author.bot) return;
    if(message.channel.type !== "text") return;
  
    let members = [];
    let indexes = [];
  
    message.guild.members.forEach(function(member){
      members.push(member.user.username);
      indexes.push(member.id);
    })
  
    let match = sm.findBestMatch(args, members);
    let username = match.bestMatch.target;
  
      let member = message.guild.members.get(indexes[members.indexOf(username)])
  
       let definedUser = "";
       let definedUser2 = "";
      if(!args[0]) {
        definedUser = message.author
        definedUser2 = message.member
      } else {
        let mention = message.mentions.users.first()
        definedUser = mention || member.user
          definedUser2 = message.mentions.members.first() || message.guild.members.get(args[0]) || member
      }
  

 //Makes sure command is sent in a guild
    if (!message.guild) {
        throw 'ça ne peut être utiliser que dans un serveur';
    }

    //Makes sure user mentions a user to get info for
    if (message.mentions.users.size < 1) {
        throw '@mention quelqu\'un pour les infos';
    }

    if (!definedUser) {
        throw 'Je ne trouve pas cette utilisateur';
    }

    //How long ago the account was created
    const millisCreated = new Date().getTime() - user.createdAt.getTime();
    const daysCreated = millisCreated / 1000 / 60 / 60 / 24;

    //How long about the user joined the server
    const millisJoined = new Date().getTime() - definedUser.joinedAt.getTime();
    const daysJoined = millisJoined / 1000 / 60 / 60 / 24;

    // Slice off the first item (the @everyone)
    let roles = definedUser.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
    if (roles.length < 1) roles = ['None'];

 /*   let embed = client.utils.embed(
        `${user.username}#${message.mentions.users.first().discriminator}`,
        '***Ce message va se supprimer dans 60sec***',
        [
            {
                name: 'Statuts',
                value: `${user.presence.status[0].toUpperCase() + user.presence.status.slice(1)}`,
            },
            {
                name: 'Jeux',
                value: `${(user.presence.game && user.presence.game && user.presence.game.name) || 'Ne joue pas.'}`,
            },
            {
                name: 'Créé le',
                value: `${moment.utc(user.createdAt).format("dddd, mmmm dS, yyyy, h:MM:ss TT")}`,
            },
            {
                name: 'Days Since Creation',
                value: `${daysCreated.toFixed(0)}`,
            },
            {
                name: 'Rejoin le',
                value: `${moment.utc(member.joinedAt).format("dddd, mmmm dS, yyyy, h:MM:ss TT")}`,
            },
            {
                name: 'Days Since Joining',
                value: `${daysJoined.toFixed(0)}`,
            },
            {
                name: 'Roles',
                value: `${roles.join(', ')}`,
                inline: false,
            },
        ],
        {
            inline: true,
            footer: `ID: ${user.id}`,
            thumbnail: user.displayAvatarURL
        }
    );*/

    let UIEmbed = new Discord.RichEmbed()
    .setDescription(`${definedUser.username}#${message.mentions.users.first().discriminator}\n***Ce message va se supprimer dans 60sec***`, false)
    .addField("Pseudo", definedUser.username, true)
    .addField("**#**", definedUser.discriminator, false)
    .setThumbnail(definedUser.displayAvatarURL, false)
    .addField("Statuts", `${definedUser.presence.status[0].toUpperCase() + definedUser.presence.status.slice(1)}`, false)
    .addField("Jeux", `${(definedUser.presence.game && definedUser.presence.game && definedUser.presence.game.name) || 'Ne joue pas.'}`, false)
    .addField("Compte créé le", `${moment.utc(definedUser.createdAt).format("dddd, mmmm dS, yyyy, h:MM:ss TT")}`, true)
    .addField("Jours total", `${daysCreated.toFixed(0)}`, false)
    .addField("Rejoin le", `${moment.utc(member.joinedAt).format("dddd, mmmm dS, yyyy, h:MM:ss TT")}`, true)
    .addField("Jours total", `${daysJoined.toFixed(0)}`, false)
    .addField("Roles", `${roles.join(', ')}`)
    .setFooter(`ID: ${definedUser.id}`)

    message.channel.send(UIEmbed)

    (await message.edit({ UIEmbed })).delete(60000);
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ui'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'userinfo',
    description: 'Donne les informations sur l\'utilisateur',
    usage: 'userinfo'
  };
