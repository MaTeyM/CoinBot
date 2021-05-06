const MESSAGES = {
    COMMANDS: {
      BOT: {
        BOTINFO: {
          name: "botinfo",
          aliases: ["binfo", "bot"],
          description: "Informations me concernant",
          category: "🕹 - Bot",
          usage: "botinfo",
          examples: ["botinfo"],
        },
        CONFIG: {
          name: "config",
          aliases: ["edit", "setup"],
          description: "Configurer le bot",
          category: "🕹 - Bot",
          usage: "config",
          examples: ["config"],
        },
        HELP: {
          name: "help",
          aliases: ["aide", "cmds", 'commands'],
          description: "Page d'aide",
          category: "🕹 - Bot",
          usage: "help <command>",
          examples: ["help", 'help work'],
        },
        INVITE: {
          name: "invite",
          aliases: ["addbot", "lien", 'inv'],
          description: "Lien d'invitation",
          category: "🕹 - Bot",
          usage: "invite",
          examples: ["invite"],
        },
        SUPPORT: {
          name: "support",
          aliases: ["support"],
          description: "Lien d'invitation vers le serveur de support",
          category: "🕹 - Bot",
          usage: "support",
          examples: ["support"],
        },
        SETPREFIX: {
          name: "setprefix",
          aliases: ["prefix", "configprefix"],
          description: "Modifier le prefix du bot",
          category: "🕹 - Bot",
          usage: "setprefix <prefix>",
          examples: ["setprefix /", 'prefix :'],
        }
      },
      ECONOMY: {
        WORK: {
          name: "work",
          aliases: ["travaille", "daily"],
          description: "Travailler pour gagner de l'argent (1xToutes les 15 minutes)",
          category: "🪙 - Économie",
          usage: "work",
          examples: ["work"],
        },
        COIN: {
          name: "coin",
          aliases: ["piece"],
          description: "Pile ou face avec mise",
          category: "🪙 - Économie",
          usage: "coin <choice> <mise>",
          examples: ["coin pile 500"],
        },
        PAY: {
          name: "pay",
          aliases: ["give", 'don'],
          description: "Donner de l'argent à un utilisateur",
          category: "🪙 - Économie",
          usage: "pay <user> <montant>",
          examples: ["pay kyoo 500"],
        },
        BAL: {
          name: "bal",
          aliases: ["balance", "money", 'cash'],
          description: "Afficher son argent",
          category: "🪙 - Économie",
          usage: "bal",
          examples: ["bal"],
        },
        ADDMONEY: {
          name: "addmoney",
          aliases: ["amoney"],
          description: "Ajouter de l'argent à un utilisateur",
          category: "🪙 - Économie",
          usage: "addmoney <member> <money>",
          examples: ["addmoney kyoo 200"],
        },
        REMOVEMONEY: {
          name: "removemoney",
          aliases: ["rmoney", 'remmoney'],
          description: "Retirer de l'argent à un utilisateur",
          category: "🪙 - Économie",
          usage: "removemoney <member> <money>",
          examples: ["removemoney kyoo 200"],
        },
        LEADERBOARD: {
          name: "leaderboard",
          aliases: ["moneys", 'bals'],
          description: "Afficher le classement du serveur",
          category: "🪙 - Économie",
          usage: "leaderboard",
          examples: ["leaderboard"],
        }
      },
      ADMIN: {
        EVAL: {
          name: "eval",
          aliases: ["test", "code"],
          description: "Tester du code",
          category: "👑 - Admin",
          usage: "eval <code>",
          examples: ["eval bla bla"],
        }
      }
    }
  };
  
  exports.MESSAGES = MESSAGES;