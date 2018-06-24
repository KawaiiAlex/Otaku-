const Discord = require('discord.js');
const quiz = [
  { q: "𝑫𝒆 𝒒𝒖𝒆𝒍𝒍𝒆 𝒄𝒐𝒖𝒍𝒆𝒖𝒓 𝒆𝒔𝒕 𝒍𝒆 𝒄𝒊𝒆𝒍?", a: ["Pas de couleur", "invisible"] },
  { q: "𝑵𝒐𝒎𝒎𝒆𝒛 𝒖𝒏𝒆 𝒎𝒂𝒓𝒒𝒖𝒆 𝒅𝒆 𝒃𝒐𝒊𝒔𝒔𝒐𝒏 𝒈𝒂𝒛𝒆𝒖𝒔𝒆.", a: ["pepsi", "coca", "coca cola", "7up", "sprite", "fanta", "schweppes"] },
  { q: "𝑵𝒐𝒎𝒎𝒆𝒛 𝒖𝒏 𝒍𝒂𝒏𝒈𝒂𝒈𝒆 𝒅𝒆 𝒑𝒓𝒐𝒈𝒓𝒂𝒎𝒎𝒂𝒕𝒊𝒐𝒏.", a: ["actionscript", "coffeescript", "c", "c++", "basic", "python", "perl", "javascript", "dotnet", "lua", "crystal", "go", "d", "php", "ruby", "rust", "dart", "java", "javascript"] },
  { q: "𝑸𝒖𝒊 𝒆𝒔𝒕 𝒖𝒏 𝒃𝒐𝒏 𝒈𝒂𝒓ç𝒐𝒏?", a: ["Toi", "Alex", "Alexandre", "kawaii alex", "alex", "alexandre", "kawaii Alex", "Kawaii Alex", "Kawaii alex"] },
  { q: "𝑫𝒂𝒏𝒔 𝒒𝒖𝒆𝒍 𝒍𝒂𝒏𝒈𝒂𝒈𝒆 𝒅𝒆 𝒑𝒓𝒐𝒈𝒓𝒂𝒎𝒎𝒂𝒕𝒊𝒐𝒏 𝒔𝒖𝒊𝒔-𝒋𝒆?", a: ["javascript",] },
  { q: "𝑵𝒐𝒎𝒎𝒆𝒛 𝒍𝒂 𝒔𝒆𝒑𝒕𝒊𝒆̀𝒎𝒆 𝒑𝒍𝒂𝒏𝒆̀𝒕𝒆 𝒅𝒖 𝒔𝒚𝒔𝒕𝒆̀𝒎𝒆 𝒔𝒐𝒍𝒂𝒊𝒓𝒆.", a: ["uranus"] },
  { q: "𝑵𝒐𝒎𝒎𝒆𝒛 𝒍𝒂 𝒑𝒍𝒖𝒔 𝒈𝒓𝒂𝒏𝒅𝒆 𝒊̂𝒍𝒆 𝒅𝒖 𝒎𝒐𝒏𝒅𝒆.", a: ["greenland",] },
  { q: "𝑸𝒖𝒆𝒍 𝒆𝒔𝒕 𝒍𝒆 𝒑𝒍𝒖𝒔 𝒍𝒐𝒏𝒈 𝒇𝒍𝒆𝒖𝒗𝒆 𝒅𝒖 𝒎𝒐𝒏𝒅𝒆?", a: ["amazon", "la rivière amazon"] },
  { q: "𝑵𝒐𝒎𝒎𝒆𝒛 𝒍𝒆 𝒑𝒍𝒖𝒔 𝒈𝒓𝒂𝒏𝒅 𝒐𝒄𝒆́𝒂𝒏 𝒅𝒖 𝒎𝒐𝒏𝒅𝒆.", a: ["pacifique", "ocean pacifique", "l'ocean pacifique"] },
  { q: "𝑵𝒐𝒎𝒎𝒆𝒛 𝒍'𝒖𝒏𝒆 𝒅𝒆𝒔 𝒕𝒓𝒐𝒊𝒔 𝒄𝒐𝒖𝒍𝒆𝒖𝒓𝒔 𝒑𝒓𝒊𝒎𝒂𝒊𝒓𝒆𝒔.", a: ["bleu", "rouge", "jaune", "Bleu", "Rouge", "Jaune"] },
  { q: "𝑪𝒐𝒎𝒃𝒊𝒆𝒏 𝒅𝒆 𝒄𝒐𝒖𝒍𝒆𝒖𝒓𝒔 𝒚 𝒂-𝒕-𝒊𝒍 𝒅𝒂𝒏𝒔 𝒖𝒏 𝒂𝒓𝒄-𝒆𝒏-𝒄𝒊𝒆𝒍?", a: ["7", "sept"] },
  { q: "𝑪𝒐𝒎𝒃𝒊𝒆𝒏 𝒚 𝒂-𝒕-𝒊𝒍 𝒅𝒆 𝒄𝒂𝒔𝒆𝒔 𝒔𝒖𝒓 𝒖𝒏 𝒆́𝒄𝒉𝒊𝒒𝒖𝒊𝒆𝒓?", a: ["64", "soixante quatre"] },
  { q: "𝑪𝒐𝒎𝒃𝒊𝒆𝒏 𝒅𝒆 𝒅𝒆𝒈𝒓𝒆́𝒔 𝒕𝒓𝒐𝒖𝒗𝒆-𝒕-𝒐𝒏 𝒅𝒂𝒏𝒔 𝒖𝒏 𝒄𝒆𝒓𝒄𝒍𝒆?", a: ["360", "360 degrées", "trois cent soixante degrées", "trois cent soixante"] },
  { q: "𝑪𝒊𝒕𝒆𝒓 𝒍𝒆 𝒑𝒓𝒆́𝒏𝒐𝒎 𝒅'𝒖𝒏𝒆 𝒘𝒂𝒊𝒇𝒖 𝒅𝒆 𝑲𝒂𝒘𝒂𝒊𝒊 𝑨𝒍𝒆𝒙", a: ["rem", "Rem", "ochaco", "Ochaco", "ochako", "Ochako", "mirai", "Mirai"] },
  { q: "𝑪𝒐𝒎𝒃𝒊𝒆𝒏 𝒅𝒆 𝒑𝒐𝒊𝒏𝒕𝒔 𝒖𝒏𝒆 𝒃𝒐𝒖𝒔𝒔𝒐𝒍𝒆 𝒂-𝒕-𝒆𝒍𝒍𝒆?", a: ["32", "trente deux"] },
  { q: "𝑪𝒐𝒎𝒃𝒊𝒆𝒏 𝒅𝒆 𝒄𝒐𝒓𝒅𝒆𝒔 𝒂 𝒖𝒏 𝒗𝒊𝒐𝒍𝒐𝒏𝒄𝒆𝒍𝒍𝒆?", a: ["4", "quatre"] },
  { q: "𝑪𝒐𝒎𝒃𝒊𝒆𝒏 𝒅𝒆 𝒔𝒚𝒎𝒑𝒉𝒐𝒏𝒊𝒆𝒔 𝒂 𝒄𝒐𝒎𝒑𝒐𝒔𝒆́𝒆𝒔 𝑩𝒆𝒆𝒕𝒉𝒐𝒗𝒆𝒏?", a: ["9", "neuf"] },
  { q: "𝑸𝒖'𝒆𝒍𝒍𝒆 𝒂̂𝒈𝒆 𝒂 𝑲𝒂𝒘𝒂𝒊𝒊 𝑨𝒍𝒆𝒙 𝒎𝒂𝒊𝒏𝒕𝒆𝒏𝒂𝒏𝒕", a: ["14", "quatorze"] },
  { q: "𝑸𝒖𝒆𝒍 𝒆𝒔𝒕 𝒍𝒆 𝒍𝒂𝒏𝒈𝒂𝒈𝒆 𝒍𝒆 𝒑𝒍𝒖𝒔 𝒃𝒂𝒔𝒊𝒒𝒖𝒆 𝒅𝒆 𝑴𝒊𝒄𝒓𝒐𝒔𝒐𝒇𝒕?", a: ["visual basic"] },
  { q: "𝑸𝒖𝒆𝒍𝒍𝒆 𝒆𝒔𝒕 𝒍𝒆 𝒍𝒂𝒏𝒈𝒖𝒂𝒈𝒆 𝒍𝒂 𝒑𝒍𝒖𝒔 𝒄𝒐𝒎𝒑𝒍𝒊𝒒𝒖𝒆́𝒆?", a: ["binaire", "le language binaire"] },
  { q: "«𝑶𝑺/𝑺𝑬» 𝒂𝒃𝒓𝒆́𝒗𝒊𝒂𝒕𝒊𝒐𝒏 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒒𝒖𝒆 𝒔𝒊𝒈𝒏𝒊𝒇𝒊𝒆 𝒈𝒆́𝒏𝒆́𝒓𝒂𝒍𝒆𝒎𝒆𝒏𝒕?", a: ["operating system", "Système d’exploitation", "Operating system", "système d'exploitation", "systeme d'exploitation", "Systeme d'exploitation"] }
];
const options = {
  max: 1,
  time: 30000,
  errors: ["time"],
};

exports.run = async (bot, message, args) => {

  const item = quiz[Math.floor(Math.random() * quiz.length)];
  message.delete().catch();
  await message.channel.send(item.q);
  try {
    const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
    const embed = new Discord.RichEmbed()
    .setAuthor(`𝑮𝒂𝒈𝒏𝒂𝒏𝒕: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
    .setTitle(`𝑩𝒐𝒏𝒏𝒆 𝒓𝒆́𝒑𝒐𝒏𝒔𝒆: \`${winnerMessage.content}\``)
    .setFooter(`𝑸𝒖𝒆𝒔𝒕𝒊𝒐𝒏: ${item.q}`)
    .setColor(message.guild.me.displayHexColor)
    if(args[0] !== winnerMessage.content) return message.channel.send("𝑩𝑶𝑵𝑵𝑬 𝑹𝑬𝑷𝑶𝑵𝑺𝑬 !") + message.channel.send(embed)

  } catch (_) {

    const embedtime = new Discord.RichEmbed()
                                 .setAuthor('𝑷𝒆𝒓𝒔𝒐𝒏𝒏𝒆 𝒏\'𝒂 𝒆𝒖 𝒍𝒂 𝒓𝒆́𝒑𝒐𝒏𝒔𝒆 𝒂̀ 𝒕𝒆𝒎𝒑𝒔!')
                                 .setTitle(`𝑩𝒐𝒏𝒏𝒆 𝒓𝒆́𝒑𝒐𝒏𝒔𝒆: \`${item.a}\``)
                                 .setFooter(`𝑸𝒖𝒆𝒔𝒕𝒊𝒐𝒏: ${item.q}`)
    return message.channel.send(embedtime)
  }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['quizG'],
    permLevel: 0
  };

  exports.help = {
    name: 'quizg',
    description: 'Pose des questions. Vous avez 30 secondes pour répondre.',
    usage: 'quizg'
  };

