const ms = require('ms');
exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  const time = args.join(' ');
  const validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply(':x: **|** 𝑽𝒐𝒖𝒔 𝒅𝒆𝒗𝒆𝒛 𝒅𝒊𝒓𝒆 𝒖𝒏 𝒕𝒆𝒎𝒑 𝒂𝒗𝒆𝒄 ``s``, ``m``, ``h``, ``d`` ԅ(ˆ⌣ˆԅ)');

  if(!message.channel.permissionsFor(message.author).has("MANAGE_CHANNELS")) return message.channel.send(":x: **|** Tu n'as pas les droits ヽ(ヅ)ノ").then(msg => {msg.delete(5000)});
  if(!message.channel.permissionsFor(client.user).has("MANAGE_CHANNELS")) return message.channel.send(":x: **|** Je n'ai pas les droits （ つ﹏╰）").then(msg => {msg.delete(5000)});

  if (validUnlocks.includes(time)) {
    message.channel.fetchMessages({limit: 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send(':white_check_mark: **|** Channel débloqué ヘ( ^o^)ノ');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.fetchMessages({limit: 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`:white_check_mark: **|** Channel bloqué pendant **${ms(ms(time), { long:true })}** (≧◡≦)`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send(':white_check_mark: **|** Channel débloqué ヘ( ^o^)ノ')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ld'],
  permLevel: 0
};

exports.help = {
  name: 'lockdown',
  description: 'verrouille un channel pour la durée définie ``s``, ``m``, ``h``, ``d``',
  usage: 'lockdown <durée>'
};
