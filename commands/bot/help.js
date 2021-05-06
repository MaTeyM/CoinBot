const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    let dbServer = await client.getGuild(message.guild);

  if (!args.length) {
    const embed = new MessageEmbed()
      .setColor("FFAC33")
      .setFooter("🕹 - Bot", client.user.displayAvatarURL())
      .setThumbnail("https://i.ibb.co/s2kM2Ln/Coin-Bot-Logo-Png.png")
      .setDescription(
        `\`[]\` & \`<>\` ne doivent pas être inclus dans les commandes, pour plus d'informations à propos d'une commande, faites: \`${dbServer.prefix}help <command>\``
      )
      .addField(
        "\u200b",
        "\u200b"
      )
      .addField(
        "🪙 - Économie",
        "> `addmoney:` Ajouter de l'argent à un utilisateur.\n> `bal:` Afficher votre argent.\n> `coin:` Partie de pile ou face.\n> `leaderboard:` Afficher le classement des utilisateurs du serveur.\n> `pay:` Donner de l'argent à un utilisateur.\n> `removemoney:` Ajouter de l'argent à un utilisateur.\n> `work:` Travailler pour gagner de l'argent (1xToutes les 15 minutes).",
        true
      )
      .addField(
        "\u200b",
        "\u200b",
        true
      )
      .addField(
        "🕹 - Bot",
        "> `botinfo:` Informations me concernant.\n> `help:` Page d'aide.\n> `invite:` Lien d'invitation.\n> `prefix:` Afficher et mettre à jour le prefix.\n> `support:` Lien vers le serveur de support.",
        true
      )

    message.channel.send(embed);
  } else {
    const command =
      client.commands.get(args[0]) ||
      client.commands.find(
        (cmd) => cmd.help.aliases && cmd.help.aliases.includes(args[0])
      );

    const embed = new MessageEmbed()
      .setColor("FFAC33")
      .setFooter("🕹 - Bot")
      .setTitle(`Commande \`${command.help.name}\``)
      .setDescription(`${command.help.description}` || "\u200b")
      .addField(
        "Usage",
        `\`${dbServer.prefix}${command.help.usage}\`` ||
          "Aucun n'usage n'est indiqué."
      );

    if (command.help.aliases.length > 0) {
      embed.addField("Alias", `\`${command.help.aliases.join("` | `")}\``);
    } else {
      embed.addField("Alias", "Aucun alias détecté.");
    }

    embed.addField("Catégorie", command.help.category || "Aucune");
    if (command.help.examples && command.help.examples.length) {
      embed.addField(
        "Exemples",
        `${command.help.examples.map((a) => `!${a}`).join(`\n`)}`
      );
    } else {
      embed.addField("Exemples", "Pas d'exemples donnés");
    }
    return message.channel.send(embed);
  }
};

module.exports.help = MESSAGES.COMMANDS.BOT.HELP;
