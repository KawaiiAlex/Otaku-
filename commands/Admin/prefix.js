const Discord = require("discord.js");
const fs = require("fs");
exports.run = async (client, message, args) => {

  if(!message.channel.permissionsFor(message.author).has("ADMINISTRATOR"))  return message.reply(":x: **|** 𝑻𝒖 𝒏'𝒂𝒔 𝒑𝒂𝒔 𝒍𝒆𝒔 𝒅𝒓𝒐𝒊𝒕𝒔 ヽ(ヅ)ノ");
  if(!args[0]) return message.channel.send(":x: **|** 𝑻𝒖 𝒅𝒐𝒊𝒔 𝒅𝒆́𝒇𝒊𝒏𝒊𝒓 𝒖𝒏 𝒑𝒓𝒆́𝒇𝒊𝒙 (ಠ⌣ಠ)")

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
      prefixes: args[0]
    };



    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
      if (err) console.log(err)
    });



    let sEmbed = new Discord.RichEmbed()
    .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
    .setTitle("𝑷𝒓𝒆́𝒇𝒊𝒙 𝒎𝒊𝒔")
    .setDescription(`𝑵𝒐𝒖𝒗𝒆𝒂𝒖 𝒑𝒓𝒆́𝒇𝒊𝒙: **${args[0]}**`);

    message.channel.send(sEmbed);

  }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pre'],
    permLevel: 0
  };

  exports.help = {
    name: 'prefix',
    description: 'Change le prefix du bot',
    usage: 'prefix <nouveau prefix>'
  };
