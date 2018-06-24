const Discord = require('discord.js');
exports.run = (client, message, args) => {

  var rand =  Math.floor(Math.random() * NUM_ANS)

  message.channel.send(`:8ball: **|** ${m8ball[rand].reply}, **${message.author.username}**`);
}

const NUM_ANS = 19;
// 8ball
var m8ball = [
  {reply:'𝑪\'𝒆𝒔𝒕 𝒄𝒆𝒓𝒕𝒂𝒊𝒏'},
  {reply:'𝑺𝒂𝒏𝒔 𝒂𝒖𝒄𝒖𝒏 𝒅𝒐𝒖𝒕𝒆'},
  {reply:'𝑶𝒖𝒊 𝒅𝒆́𝒇𝒊𝒏𝒊𝒕𝒊𝒗𝒆𝒎𝒆𝒏𝒕'},
  {reply:'𝑽𝒐𝒖𝒔 𝒑𝒐𝒖𝒗𝒆𝒛 𝒄𝒐𝒎𝒑𝒕𝒆𝒓 𝒔𝒖𝒓 𝒍𝒖𝒊'},
  {reply:'𝑪𝒐𝒎𝒎𝒆 𝒋𝒆 𝒍𝒆 𝒗𝒐𝒊𝒔, 𝒐𝒖𝒊'},
  {reply:'𝑷𝒓𝒐𝒃𝒂𝒃𝒍𝒆𝒎𝒆𝒏𝒕'},
  {reply:'𝑳𝒆𝒔 𝒑𝒆𝒓𝒔𝒑𝒆𝒄𝒕𝒊𝒗𝒆𝒔 𝒔𝒐𝒏𝒕 𝒃𝒐𝒏𝒏𝒆𝒔'},
  {reply:'𝑶𝒖𝒊'},
  {reply:'𝑱𝒆 𝒏\'𝒂𝒊 𝒑𝒂𝒔 𝒄𝒐𝒎𝒑𝒓𝒊𝒔, 𝒆𝒔𝒔𝒂𝒚𝒆𝒛 𝒂̀ 𝒏𝒐𝒖𝒗𝒆𝒂𝒖'},
  {reply:'𝑫𝒆𝒎𝒂𝒏𝒅𝒆 𝒎𝒐𝒊 𝒂̀ 𝒏𝒐𝒖𝒗𝒆𝒂𝒖 𝒑𝒍𝒖𝒔 𝒕𝒂𝒓𝒅'},
  {reply:'𝑴𝒊𝒆𝒖𝒙 𝒗𝒂𝒖𝒕 𝒏𝒆 𝒑𝒂𝒔 𝒗𝒐𝒖𝒔 𝒍𝒆 𝒅𝒊𝒓𝒆 𝒎𝒂𝒊𝒏𝒕𝒆𝒏𝒂𝒏𝒕'},
  {reply:'𝑱𝒆 𝒏𝒆 𝒑𝒆𝒖𝒙 𝒑𝒂𝒔 𝒍𝒆 𝒑𝒓𝒆́𝒅𝒊𝒓𝒆 𝒎𝒂𝒊𝒏𝒕𝒆𝒏𝒂𝒏𝒕'},
  {reply:'𝑪𝒐𝒏𝒄𝒆𝒏𝒕𝒓𝒆𝒛-𝒗𝒐𝒖𝒔 𝒆𝒕 𝒅𝒆𝒎𝒂𝒏𝒅𝒆𝒛 𝒎𝒐𝒊 𝒂̀ 𝒏𝒐𝒖𝒗𝒆𝒂𝒖'},
  {reply:"𝑵𝒆 𝒄𝒐𝒎𝒑𝒕𝒆 𝒑𝒂𝒔 𝒔𝒖𝒓 𝒍𝒖𝒊"},
  {reply:'𝑴𝒂 𝒓𝒆́𝒑𝒐𝒏𝒔𝒆 𝒆𝒔𝒕 𝒏𝒐𝒏'},
  {reply:'𝑴𝒆𝒔 𝒔𝒐𝒖𝒓𝒄𝒆𝒔 𝒅𝒊𝒔𝒆𝒏𝒕 𝒏𝒐𝒏'},
  {reply:'𝑳𝒆𝒔 𝒑𝒆𝒓𝒔𝒑𝒆𝒄𝒕𝒊𝒗𝒆𝒔 𝒏𝒆 𝒔𝒐𝒏𝒕 𝒑𝒂𝒔 𝒔𝒊 𝒃𝒐𝒏𝒏𝒆𝒔'},
  {reply:'𝑻𝒓𝒆̀𝒔 𝒅𝒐𝒖𝒕𝒆𝒖𝒙'},
  {reply:'𝑵𝒐𝒏'}
];

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'Je répond a votre question',
  usage: '8ball <question>'
};
