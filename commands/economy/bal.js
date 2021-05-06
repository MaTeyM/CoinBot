const { MESSAGES } = require('../../util/constants'); 
const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message) => {
    let dbUser = await client.getMember(message.member, message.guild);

        let embed = new MessageEmbed()
        .setColor('FFAC33')
        .setFooter('Économie', 'https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .setThumbnail('https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
        .setDescription(`Tu possèdes actuellement \`${dbUser.cash}\`🪙!`)

        message.channel.send(embed)
};

module.exports.help = MESSAGES.COMMANDS.ECONOMY.BAL;