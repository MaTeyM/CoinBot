const { Client, Collection } = require('discord.js');
const { loadCommands, loadEvents } = require('./util/loader');
const { TOKEN } = require('./config');

const client = new Client();
require('./util/functions.js')(client);
client.commands = new Collection();

loadCommands(client);
loadEvents(client);

client.mongoose = require('./util/mongoose');
client.mongoose.init();
client.login(TOKEN);