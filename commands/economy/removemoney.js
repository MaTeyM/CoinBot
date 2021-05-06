const { MESSAGES } = require('../../util/constants'); 
const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message, args) => {
    let dbServer = await client.getGuild(message.guild);
    let user = message.guild.member(message.mentions.users.first());
    let dbUser = await client.getMember(user, message.guild);
    let moneyToRemove = parseInt(args[1]);
    let updatedMoney = dbUser.cash - moneyToRemove

    let no_member_embed = new MessageEmbed()
    .setColor('DC3F3F')
    .setFooter('Économie', 'https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
    .setDescription(`Tu n\'as pas mentionné de membre.\n\nUsage: \`${dbServer.prefix}removemoney <member> <money>\`.`)
    .setThumbnail('https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')

    let no_perm_embed = new MessageEmbed()
    .setColor('DC3F3F')
    .setFooter('Économie', 'https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
    .setDescription(`Tu n\'as pas la permission pour utiliser cette commande.\n\nIl te faut la permission \`ADMINISTRATEUR\`.`)
    .setThumbnail('https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')

    let invalid_number_embed = new MessageEmbed()
    .setColor('DC3F3F')
    .setFooter('Économie', 'https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
    .setThumbnail('https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
    .setDescription(`Tu n\'as pas indiqué de montant.\n\nUsage: \`${dbServer.prefix}removemoney <member> <money>\`.`)

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(no_perm_embed);
    if(!user) return message.channel.send(no_member_embed);
    if(isNaN(moneyToRemove)) return message.channel.send(invalid_number_embed);
    if(!moneyToRemove) return message.channel.send(no_num_embed);

    await client.updateMember(user, message.guild, { cash: updatedMoney })

        let embed = new MessageEmbed()
        .setColor('FFAC33')
        .setFooter('Économie', 'https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .setThumbnail('https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
        .setDescription(`\`${moneyToRemove}\`🪙 ont été retirés au compte de \`${user.user.tag}\`\nCet utilisateur possède désormais \`${updatedMoney}\`🪙`)

        message.channel.send(embed)
};

module.exports.help = MESSAGES.COMMANDS.ECONOMY.REMOVEMONEY;