const { MESSAGES } = require('../../util/constants'); 
const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message) => {
    let dbServer = await client.getGuild(message.guild);
    let dbUser = await client.getMember(message.member, message.guild);
    let moneyToAdd = Math.floor(Math.random() * 500) + 500;

    const dailyCD = 900000;
    if(!dbUser.balance) await client.updateMember(message.member, message.guild, { cash: 500 });

    const lastDaily = await dbUser.date;
    if(lastDaily !== null && dailyCD - (Date.now() - lastDaily) > 0) {
        const cdTime = dailyCD - (Date.now() - lastDaily);

        let embed = new MessageEmbed()
        .setColor('DC3F3F')
        .setFooter('Économie', 'https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .setThumbnail('https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
        .setDescription(`Tu ne peux pas travailler maintenant, tu dois attendre encore \`${Math.floor(cdTime / (1000*60) %60)}\` minute(s) et \`${Math.floor(cdTime / (1000) %60)}\` seconde(s)!`)

        message.channel.send(embed)
    } else {
        client.updateMember(message.member, message.guild, { date: Date.now(), cash: dbUser.cash + moneyToAdd });
        let embed = new MessageEmbed()
        .setColor('FFAC33')
        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .setThumbnail('https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
        .setFooter('Économie', 'https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
        .setDescription(`Tu viens de gagner \`${moneyToAdd}\`🪙`)

        message.channel.send(embed);
    }
};

module.exports.help = MESSAGES.COMMANDS.ECONOMY.WORK;