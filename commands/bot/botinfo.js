const { MESSAGES } = require('../../util/constants'); 
const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message) => {
    let embed = new MessageEmbed()
    .setColor('FFAC33')
    .setDescription('`Voici quelques informations me concernant:`')
    .setFooter('🕹 - Bot', client.user.displayAvatarURL())
    .setThumbnail('https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png')
    .addField('⚙ Version', '1.0.0', true)
    .addField('💾 Serveurs', client.guilds.cache.size, true)
    .addField('👤 Utilisateurs', client.users.cache.size, true)
    // .addField('Invitation', '[(Clique ici)](https://discord.com/oauth2/authorize?client_id=835620203278630923&scope=bot&permissions=8)', true)
    .addField('📮 Invitation', 'Bientôt disponible', true)
    // .addField('Support', '[(Clique ici)](https://discord.gg/HK5Zrg2mkq)', true)
    .addField('📚 Support', 'Maintenance', true)
    .addField('👑 Créateur', client.users.cache.get("320832231302103051"), true)

message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.BOT.BOTINFO;