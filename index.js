const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);
const YTDL = require("ytdl-core");
const redcolor = chalk.keyword('red');
const orangecolor = chalk.keyword('orange');
const yellowcolor = chalk.keyword('yellow');
const grencolor = chalk.keyword('green');
const cyancolor = chalk.keyword('cyan');
const bluecolor = chalk.keyword('blue');


const log = message => {
  console.log(`[${moment().format('HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/Fun/', (err, filesfun) => {
  if (err) console.error(err);
  console.log(redcolor(`${filesfun.length} commandes fun 😂,`));
  filesfun.forEach(f => {
    const props = require(`./commands/Fun/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });

fs.readdir('./commands/Info/', (err, filesinfo) => {
  if (err) console.error(err);
  console.log(orangecolor(`${filesinfo.length} commandes information 💻,`));
  filesinfo.forEach(f => {
    const props = require(`./commands/Info/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });

fs.readdir('./commands/Mod/', (err, filesmod) => {
  if (err) console.error(err);
  console.log(yellowcolor(`${filesmod.length} commandes modération 🔧,`));
  filesmod.forEach(f => {
    const props = require(`./commands/Mod/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });

  fs.readdir('./commands/Admin/', (err, filesadmin) => {
    if (err) console.error(err);
    console.log(yellowcolor(`${filesadmin.length} commandes administration 🔧,`));
    filesadmin.forEach(f => {
      const props = require(`./commands/Admin/${f}`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    });

fs.readdir('./commands/Social/', (err, filessocial) => {
  if (err) console.error(err);
  console.log(grencolor(`${filessocial.length} commandes social  🙌 ,`));
  filessocial.forEach(f => {
    const props = require(`./commands/Social/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });

fs.readdir('./commands/NSFW/', (err, filesnsfw) => {
  if (err) console.error(err);
  console.log(cyancolor(`${filesnsfw.length} commandes nsfw 👉👌,`));
  filesnsfw.forEach(f => {
    const props = require(`./commands/NSFW/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
    fs.readdir('./commands/Music/', (err, filesmusic) => {
    if (err) console.error(err);
    console.log(cyancolor(`${filesmusic.length} commandes music,`));
    filesmusic.forEach(f => {
      const props = require(`./commands/Music/${f}`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    });
 /*   fs.readdir('./commands/raid/', (err, filesraid) => {
      if (err) console.error(err);
      filesraid.forEach(f => {
        const props = require(`./commands/raid/${f}`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
          client.aliases.set(alias, props.help.name);
        });
      });
      });*/
  var totalcmd =  Math.floor(filesfun.length + filesinfo.length + filesmod.length + filessocial.length + filesnsfw.length + filesadmin.length + filesmusic.length);
console.log(bluecolor(`Il y a un total de ${totalcmd} commandes 👍.`));

});
});
});
});
});
});
});


client.elevation = message => {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;
  const mod_role = message.guild.roles.find('name', config.modrolename);
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 2;
  const admin_role = message.guild.roles.find('name', config.adminrolename);
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 3;
  if (message.author.id === config.ownerid) permlvl = 4;
  return permlvl;
};


var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'qui a été expurgé')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'qui a été expurgé')));
});


'use strict';

require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

const configs = {
	token: process.env.TOKEN,
	guildId: process.env.GUILD_ID,
	role: process.env.ROLE_ID,
	ids: process.env.DISCORD_IDS.split(','),
};

let guild;

async function checkForAutoMember(userId, member) {
	const guildMember = member || guild.members.get(userId);
	if (guildMember && !guildMember.roles.get(configs.role)) {
		await guildMember.addRole(configs.role);
		console.log(`Added ${guild.roles.get(configs.role)} to ${guildMember}`);
	}
}

  guild = client.guilds.get(configs.guildId);

  Promise.all(configs.ids.map((id) => {
	   return checkForAutoMember(id);
  }));


client.on('guildMemberAdd', member => checkForAutoMember(undefined, member));



client.login(configs.token)
