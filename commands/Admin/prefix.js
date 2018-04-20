const Discord = require("discord.js");
const fs = require("fs");
exports.run = async (client, message, args) => {

  if(!message.channel.permissionsFor(message.author).has("ADMINISTRATOR"))  return message.reply("Non non non");
  if(!args[0]) return message.channel.send("Tu dois mettre un prefix")

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
      prefixes: args[0]
    };



    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
      if (err) console.log(err)
    });



    let sEmbed = new Discord.RichEmbed()
    .setColor("#FF9900")
    .setTitle("Prefix mis")
    .setDescription(`Nouveau prefix: ${args[0]}`);

    message.channel.send(sEmbed);

  }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pre'],
    permLevel: 2
  };

  exports.help = {
    name: 'prefix',
    description: 'Change le prefix',
    usage: 'prefix [nouveau prefix]'
  };
