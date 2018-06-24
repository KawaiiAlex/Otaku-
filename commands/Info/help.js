const Discord = require('discord.js');
const fs = require("fs");
const config = require('../../config.json')
exports.run = (client, message, params) => {
  if (message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    };
  }
  let prefix = prefixes[message.guild.id].prefixes;
  if (!params[0]) {
    var HelpEmbed = new Discord.RichEmbed()
    .setDescription(`𝑼𝒕𝒊𝒍𝒊𝒔𝒆 \`${prefix}help <commande>\` 𝒑𝒐𝒖𝒓 𝒑𝒍𝒖𝒔 𝒅'𝒊𝒏𝒇𝒐𝒔 𝒔𝒖𝒓 𝒍𝒂 𝒄𝒐𝒎𝒎𝒂𝒏𝒅𝒆 (• ε •)`)
    .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
    .addField("𝑴𝒐𝒅𝒆́𝒓𝒂𝒕𝒊𝒐𝒏 (⌐■_■)--︻╦╤─", "`ban`, `kick`, `mute`, `tempmute`, `lockdown`, `purge`, `addrole`, `removerole`, `unban`, `prefix`")
    .addField("𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏 (∩｀-´)⊃━━☆ﾟ.*･｡ﾟ", "`help`, `botinfo`, `serverinfo`, `userinfo`, `report`, `ping`, `invite`, `weather`, `google`, `youtube`, `translate`")
    .addField("𝑭𝒖𝒏 ヘ( ^o^)ノ＼(^_^ )", "`8ball`, `anime`, `avatar`, `poke`, `pollc`, `quizg`, `reverse`, `roll`, `say`")  
    .addField("𝑺𝒐𝒄𝒊𝒂𝒍 (╭☞⚆ᗜ⚆)╭☞", "`cry`, `kiss`, `punch`, `pout`, `pat`, `hug`")
    .addField("𝑵𝑺𝑭𝑾 (͡° ͜ʖ ͡°)", "`4k`, `amateur`, `asian`, `cosplay`, `dick`, `gif`, `hentai`, `milf`, `public`, `pussy`, `snapchat`, `uniform`, `fuck`")
    .setFooter("๖̶̶̶ζ͜͡𝑩𝒐𝒕 𝒑𝒂𝒓 𝑲𝒂𝒘𝒂𝒊𝒊 𝑨𝒍𝒆𝒙 ͜͡ζ̶̶̶๖", client.users.get('281125214098685954').displayAvatarURL);

    message.channel.send(HelpEmbed)

  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      var HelpEmbed2 = new Discord.RichEmbed()
      .setTitle(`𝑪𝒐𝒎𝒎𝒂𝒏𝒅𝒆: ${command.help.name}`)
      .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
      .addField("__𝑫𝒆𝒔𝒄𝒓𝒊𝒑𝒕𝒊𝒐𝒏__:", command.help.description)
      .addField("__𝑼𝒕𝒊𝒍𝒊𝒔𝒂𝒕𝒊𝒐𝒏__:", prefix+command.help.usage)
      .addField("__𝑨𝒍𝒊𝒂𝒔𝒆__:", command.conf.aliases)
      message.channel.send(HelpEmbed2);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'aide'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Montre tout les commandes existantes sur le bot',
  usage: 'help <command>'
};
