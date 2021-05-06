const { MESSAGES } = require('../../util/constants');
const { MessageEmbed } = require('discord.js');
const { inspect } = require('util');

module.exports.run = async(client, message, args) => {
    if (message.author.id != "320832231302103051") return;
      try {
        let toEval = args.join(" ");
        let evaluated = inspect(eval(toEval, { depth: 0 }));

        if (!toEval) {
          return message.channel.send(`Je n'ai pas pu évaluer: \`air\``);
        } else {
          let hrStart = process.hrtime();
          let hrDiff;
          hrDiff = process.hrtime(hrStart);
          let embed = new MessageEmbed()
          .setColor('#4C2EF3')
          .setFooter('🕹 - Bot', client.user.displayAvatarURL())
            .addField("Code", "```" + args.join(" ") + "```")
            .addField(
              "Temps d'exécution",
              `Exécuté en ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ""}${hrDiff[1] /
                1000000}ms`
            )
            .addField("Réponse", "```js\n" + evaluated + "```");
          return message.channel.send(embed);
        }
      } catch (e) {
        console.log(e);
      }
};

module.exports.help = MESSAGES.COMMANDS.ADMIN.EVAL;