const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    let dbServer = await client.getGuild(message.guild);
    let newprefix = args[0];

    let no_prefix_embed = new MessageEmbed()
    .setColor('DC3F3F')
    .setFooter('🕹 - Bot')
    .setDescription(`Le prefix actuel du serveur est: \`${dbServer.prefix}\`\nPour le modifier, il vous suffit de taper: \`${dbServer.prefix}setprefix prefix\``)
    .setThumbnail('https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')

    let no_perm_embed = new MessageEmbed()
    .setColor('DC3F3F')
    .setFooter('🕹 - Bot')
    .setDescription('Tu n\'as pas la permission pour utiliser cette commande.\n\nIl te faut la permission `ADMINISTRATEUR`.')
    .setThumbnail('https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')

    if(!newprefix) return message.channel.send(no_prefix_embed);
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(no_perm_embed);

    await client.updateGuild(message.guild, { prefix: newprefix }).then(async() => {

        let embed = new MessageEmbed()
        .setColor('FFAC33')
        .setThumbnail('https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
        .setDescription(`Le préfix à été changé, il est désormais: \`${newprefix}\``)
        .setFooter('🕹 - Bot', client.user.displayAvatarURL())

        message.channel.send(embed);

    });
};

module.exports.help = MESSAGES.COMMANDS.BOT.SETPREFIX;
