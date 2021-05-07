const { MESSAGES } = require('../../util/constants');
const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message) => {
    let dbServer = await client.getGuild(message.guild);
    let dbUser = await client.getMember(message.member, message.guild);
    let moneyToAdd = Math.floor(Math.random() * 500) + 500;

    if(dbServer.work_gain === '0') moneyToAdd = moneyToAdd*0.5;
    if(dbServer.work_gain === '1') moneyToAdd = moneyToAdd;
    if(dbServer.work_gain === '2') moneyToAdd = moneyToAdd*2;
    if(dbServer.work_gain === '3') moneyToAdd = moneyToAdd*4;

    let dailyCD = 900000;

    if(dbServer.work_cooldown === '0') dailyCD = dailyCD;
    if(dbServer.work_cooldown === '1') dailyCD = dailyCD*4;
    if(dbServer.work_cooldown === '2') dailyCD = dailyCD*16;
    if(dbServer.work_cooldown === '3') dailyCD = dailyCD*32;
    if(!dbUser.balance) await client.updateMember(message.member, message.guild, { cash: 500 });

    const lastDaily = await dbUser.date;
    if(lastDaily !== null && dailyCD - (Date.now() - lastDaily) > 0) {
        const cdTime = dailyCD - (Date.now() - lastDaily);

        let embed = new MessageEmbed()
        .setColor('DC3F3F')
        .setFooter('Économie', 'https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .setThumbnail('https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
        .setDescription(`Tu ne peux pas travailler maintenant, tu dois attendre encore \`${Math.floor(cdTime / (1000*60*60) %60)}\` heure(s) \`${Math.floor(cdTime / (1000*60) %60)}\` minute(s) et \`${Math.floor(cdTime / (1000) %60)}\` seconde(s)!`)

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
