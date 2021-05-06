const { Member } = require('../../util/models/index');
const { DEFAULT_GUILD_SETTINGS } = require('../../config');

module.exports = async (client, message) => {
  if (message.author.bot) return;

  const dbServer = await client.getGuild(message.guild);
  const dbUser = await client.getMember(message.member, message.guild);
  const data = await Member.findOne({ guildID: message.guild.id, memberID: message.member.id })

  const args = message.content.slice(dbServer.prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!data) {
    const newMember = {
      guildID: message.guild.id,
      guildName: message.guild.name,
      memberID: message.member.id,
      memberName: message.author.tag,
    };

    await client.createMember(newMember);
  }

  if(data) {

};

  if(message.content.startsWith(dbServer.prefix || DEFAULT_GUILD_SETTINGS.prefix)) {

  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.help.aliases && cmd.help.aliases.includes(commandName)
    );
  if (!command) return;
  if(command) message.delete();
  command.run(client, message, args, dbServer, dbUser);

    };
};