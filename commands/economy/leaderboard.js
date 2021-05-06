const { MESSAGES } = require('../../util/constants');
const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message) => {
    
    let embed = new MessageEmbed()
    .setDescription('```diff\nCLASSEMENT DES UTILISATEURS DU SERVEUR!\n```')
    .setColor('FFAC33')
    .addField('\u200b', '\u200b')
    .setFooter('Économie', 'https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
    .setThumbnail('https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')

    await client.getMembers(message.guild).then(p => {
        p.sort((a, b) => (a.cash < b.cash) ? 1 : -1).splice(0, 10).forEach(e => {
            embed.addField('> ' + e.memberName + ' `(' + e.cash + ')`🪙', `\u200b`)
        });
    });

    message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.ECONOMY.LEADERBOARD;