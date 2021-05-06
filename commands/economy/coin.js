const { MESSAGES } = require('../../util/constants');
const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message, args) => {
    let choice = args[0];
    let mise = parseInt(args[1]);
    let gain = mise * 2;
    const rNumber = Math.floor(Math.random() * 2);

    let dbServer = await client.getGuild(message.guild);

    let no_choice_embed = new MessageEmbed()
    .setColor('DC3F3F')
    .setFooter('Économie', 'https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
    .setDescription(`Tu n\'as pas indiqué de choix.\n\nUsage: \`${dbServer.prefix}coin <pile | face> <mise>\`.`)
    .setThumbnail('https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')

    let invalid_number_embed = new MessageEmbed()
    .setColor('DC3F3F')
    .setFooter('Économie', 'https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
    .setThumbnail('https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
    .setDescription(`Tu n\'as pas indiqué de mise.\n\nUsage: \`${dbServer.prefix}coin <pile | face> <mise>\`.`)

    let no_bal_embed = new MessageEmbed()
    .setColor('DC3F3F')
    .setFooter('Économie', 'https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
    .setThumbnail('https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
    .setDescription(`Tu n\'as pas assez d'argent pour faire cette commande!`)

    let dbUser = await client.getMember(message.member, message.guild);
    await client.updateMember(message.member, message.guild, { cash: dbUser.cash - mise })

    if(!choice) return message.channel.send(no_choice_embed);
    if(!mise) return message.channel.send(invalid_number_embed);
    if(dbUser.cash < mise) return message.channel.send(no_bal_embed);

    if(rNumber === 0 && choice == 'pile') {
        let pile_embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setColor("FFAC33")
        .setFooter('Économie', client.user.displayAvatarURL())
        .setThumbnail("https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png")
        .setDescription(`La pièce est tombé sur... \`PILE\`\nTu viens de gagner \`${gain}\`🪙`)

        await client.updateMember(message.member, message.guild, { cash: dbUser.cash + gain })
        message.channel.send(pile_embed);
    }
    if (rNumber === 1 && choice == 'face') {
        let face_embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setColor("FFAC33")
        .setFooter('Économie', client.user.displayAvatarURL())
        .setThumbnail("https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png")
        .setDescription(`La pièce est tombé sur... \`FACE\`\nTu viens de gagner \`${gain}\`🪙`)

        await client.updateMember(message.member, message.guild, { cash: dbUser.cash + gain })
        message.channel.send(face_embed);
    }
    if(rNumber === 0 && choice == 'face') {
        let pile_embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setColor("FFAC33")
        .setFooter('Économie', client.user.displayAvatarURL())
        .setThumbnail("https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png")
        .setDescription(`La pièce est tombé sur... \`PILE\`\nTu viens de perdre \`${mise}\`🪙`)

        message.channel.send(pile_embed);
    }
    if(rNumber === 1 && choice == 'pile') {
        let pile_embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setColor("FFAC33")
        .setFooter('Économie', client.user.displayAvatarURL())
        .setThumbnail("https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png")
        .setDescription(`La pièce est tombé sur... \`FACE\`\nTu viens de perdre \`${mise}\`🪙`)
        
        message.channel.send(pile_embed);
    }
};

module.exports.help = MESSAGES.COMMANDS.ECONOMY.COIN;