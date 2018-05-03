exports.parseUser = (message, user) => {
    const member = message.guild.member(user) || null;
    if (user.id === message.author.id) {
      return message.channel.send('Tu ne peux pas te faire ça pourquoi as tu essayer ; -; ?');
    } else if (member) {
      if (member.highestRole.position >= message.member.highestRole.position) return message.channel.send('Le membre ciblé a une position plus ou moins égale à la votre.')
    }
    return user;
  };
