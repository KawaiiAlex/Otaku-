const Discord = require('discord.js');
const translate = require('google-translate-api');
const Langs = ['english','french','german','italian', 'japanese','korean','latin','portugese','russian','spanish'];
const fs = require("fs");
const config = require('../../config.json')

module.exports.run = async (bot, message, args) => {
    if (message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
        prefixes: config.prefix
      };
    }
    let prefix = prefixes[message.guild.id].prefixes;

    if (!args[0]) {

        const embed = new Discord.RichEmbed()
            .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
            .setDescription(`:Traduit une phrase ou un mot dans le language choisie\nUsage: ${prefix}translate <langage> <text>`);

        return message.channel.send(embed);

    } else {

        if (args.length === undefined) {

            return message.channel.send(`:x: | 𝑫𝒐𝒏𝒏𝒆́ 𝒖𝒏 𝒎𝒐𝒕 𝒐𝒖 𝒖𝒏𝒆 𝒑𝒉𝒓𝒂𝒔𝒆 𝒂̀ 𝒕𝒓𝒂𝒅𝒖𝒊𝒓𝒆 ヽ(ヅ)ノ \n\`${prefix}translate <langage> <text>\``);

        } else {

            let transArg = args[0].toLowerCase();

            args = args.join(' ').slice(1)
            let translation;

            if (!Langs.includes(transArg)) return message.channel.send("**𝑳𝒂𝒏𝒈𝒖𝒂𝒈𝒆 𝒊𝒏𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆**. 𝑳𝒂𝒏𝒈𝒖𝒂𝒈𝒆 𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆 `english`,`french`,`german`,`italian`, `japanese`,`korean`,`latin`,`portugese`,`russian`,`spanish`");
            args = args.slice(transArg.length);

            translate(args, {
                to: transArg
            }).then(res => {

                message.channel.send("𝑻𝒓𝒂𝒅𝒖𝒄𝒕𝒊𝒐𝒏 𝒅𝒆 **" + args + "**");
                message.channel.send(res.text, {code:'css'})            
            });

        }

    }

}

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ts'],
    permLevel: 0
  };

  exports.help = {
    name: 'translate',
    description: 'Traduit une phrase ou un mot dans le language choisie',
    usage: 'translate <langage> <text>'
  };