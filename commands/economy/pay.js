const { MESSAGES } = require('../../util/constants'); 
const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message, args) => {
    let dbServer = await client.getGuild(message.guild);
    let dbUser = await client.getMember(message.member, message.guild);
    let user = message.guild.member(message.mentions.users.first());
    let dbAuthor = await client.getMember(user, message.guild);
    let moneyToAdd = parseInt(args[1]);
    let updatedMoney = dbAuthor.cash + moneyToAdd

    let no_member_embed = new MessageEmbed()
    .setColor('DC3F3F')
    .setFooter('Économie', 'https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
    .setDescription(`Tu n\'as pas mentionné de membre.\n\nUsage: \`${dbServer.prefix}pay <member> <montant>\`.`)
    .setThumbnail('https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')

    let invalid_number_embed = new MessageEmbed()
    .setColor('DC3F3F')
    .setFooter('Économie', 'https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
    .setThumbnail('https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
    .setDescription(`Tu n\'as pas indiqué de montant.\n\nUsage: \`${dbServer.prefix}pay <member> <montant>\`.`)

    let no_bal_embed = new MessageEmbed()
    .setColor('DC3F3F')
    .setFooter('Économie', 'https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
    .setThumbnail('https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
    .setDescription(`Tu n\'as pas assez d'argent pour faire cette commande!`)

    if(!user) return message.channel.send(no_member_embed);
    if(isNaN(moneyToAdd)) return message.channel.send(invalid_number_embed);
    if(dbUser.cash < moneyToAdd) return message.channel.send(no_bal_embed);
    if(!moneyToAdd) return message.channel.send(no_num_embed);

    await client.updateMember(message.member, message.guild, { cash: dbUser.cash - moneyToAdd });
    await client.updateMember(user, message.guild, { cash: updatedMoney });

        let embed = new MessageEmbed()
        .setColor('FFAC33')
        .setFooter('Économie', 'https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .setThumbnail('https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
        .setDescription(`Vous venez de donner \`${moneyToAdd}\`🪙 à \`${user.user.tag}\`\nCet utilisateur possède désormais \`${updatedMoney}\`🪙`)

        message.channel.send(embed)
};

module.exports.help = MESSAGES.COMMANDS.ECONOMY.PAY;