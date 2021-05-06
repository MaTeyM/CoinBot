const { MESSAGES } = require('../../util/constants'); 
const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message) => {
    let embed = new MessageEmbed()
    .setColor('FFAC33')
    .setDescription('**Hey salut toi**! Tu souhaites rejoindre le serveur de support ? Alors clique ici: (Bientôt disponible)')
    .setFooter('🕹 - Bot')
    .setThumbnail('https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')

message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.BOT.SUPPORT;