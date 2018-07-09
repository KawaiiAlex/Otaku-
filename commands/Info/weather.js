const Discord = require("discord.js");
const weather = require('weather-js')

exports.run = (client, message, args) => {

weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
  
if(result.length === 0){
message.channel.send("**S'il vous plaît, fournissez moi un emplacement valide.**")
return;
}

  var current = result[0].current;
  var location = result[0].location;
	if (err) message.channel.send(err);
    let embed = new Discord.RichEmbed()
    .setDescription(`**${current.skytext}**`)
    .setAuthor(`Météo pour ${current.observationpoint}`)
    .setThumbnail(current.imageUrl)
    .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
    .addField('Fuseau horaire', `UTC${location.timezone}, true`)
    .addField('Type de degré', location.degreetype, true)
    .addField('Temperature', `${current.temperature} Degrés`, true)
    .addField('Ressenti', `${current.feelslike} Degrés`, true)
    .addField('Les vents', current.winddisplay, true)
    .addField('Humidité', `${current.humidity}%`, true)
    message.channel.send(embed)
});
  

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['météo'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'weather',
    description: 'Donne la météo de l\'endroit souhaité',
    usage: 'weather'
  };