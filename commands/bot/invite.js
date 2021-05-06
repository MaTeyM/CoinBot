const { MESSAGES } = require('../../util/constants'); 
const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message) => {
    let embed = new MessageEmbed()
    .setColor('FFAC33')
    .setDescription('**Hey salut toi**! Tu souhaites m\'inviter sur ton serveur ? Alors clique ici: [Invitation](https://discord.com/oauth2/authorize?client_id=835620203278630923&scope=bot&permissions=8)')
    .setFooter('🕹 - Bot')
    .setThumbnail('https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')

message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.BOT.INVITE;