const Discord = require("discord.js");
const weather = require('weather-js')

exports.run = (client, message, args) => {

weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
  
if(!result){
message.channel.send(":x: **|** 𝑺'𝒊𝒍 𝒗𝒐𝒖𝒔 𝒑𝒍𝒂𝒊̂𝒕, 𝒇𝒐𝒖𝒓𝒏𝒊𝒔𝒔𝒆𝒛 𝒎𝒐𝒊 𝒖𝒏 𝒆𝒎𝒑𝒍𝒂𝒄𝒆𝒎𝒆𝒏𝒕 𝒗𝒂𝒍𝒊𝒅𝒆 ಥ_ಥ")
return;
}

  var current = result[0].current;
  var location = result[0].location;
	if (err) message.channel.send(err);
    let embed = new Discord.RichEmbed()
    .setDescription(`**${current.skytext}**`)
    .setAuthor(`𝑴𝒆́𝒕𝒆́𝒐 𝒑𝒐𝒖𝒓 ${current.observationpoint}`)
    .setThumbnail(current.imageUrl)
    .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
    .addField('𝑭𝒖𝒔𝒆𝒂𝒖 𝒉𝒐𝒓𝒂𝒊𝒓𝒆', `**UTC${location.timezone}**`, true)
    .addField('𝑻𝒚𝒑𝒆 𝒅𝒆 𝒅𝒆𝒈𝒓𝒆́', "**" + location.degreetype + "**", true)
    .addField('𝑻𝒆𝒎𝒑𝒆́𝒓𝒂𝒕𝒖𝒓𝒆', `**${current.temperature}** 𝒅𝒆𝒈𝒓𝒆́𝒔`, true)
    .addField('𝑹𝒆𝒔𝒔𝒆𝒏𝒕𝒊', `**${current.feelslike}** 𝒅𝒆𝒈𝒓𝒆́𝒔`, true)
    .addField('𝑳𝒆𝒔 𝒗𝒆𝒏𝒕𝒔', "**" + current.winddisplay + "**", true)
    .addField('𝑯𝒖𝒎𝒊𝒅𝒊𝒕𝒆́', `**${current.humidity}%**`, true)
    .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()
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
    usage: 'weather <ville>'
  };