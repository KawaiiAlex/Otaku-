const Discord = require("discord.js");
const fs = require("fs");
exports.run = async (client, message, args) => {

  if(!message.channel.permissionsFor(message.author).has("ADMINISTRATOR"))  return message.reply(":x: **|** Tu n'as pas les droits ヽ(ヅ)ノ");
  if(!args[0]) return message.channel.send(":x: **|** Tu dois définir un préfix (ಠ⌣ಠ)")

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
      prefixes: args[0]
    };



    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
      if (err) console.log(err)
    });



    let sEmbed = new Discord.RichEmbed()
    .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
    .setTitle("Préfix mis ( ＾◡＾)っ❤")
    .setDescription(`Nouveau préfix: **${args[0]}**`);

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
