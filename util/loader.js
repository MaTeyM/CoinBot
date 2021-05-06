const { readdirSync } = require('fs');

const loadCommands = (client, dir = './commands/') => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith('.js'));

        for (const file of commands) {
            const getFileName = require(`../${dir}/${dirs}/${file}`);
            client.commands.set(getFileName.help.name, getFileName);
            console.log('\x1b[32m', `COMMAND LOADED -> ${getFileName.help.name}`);
        };
    });
};

const loadEvents = (client, dir = './events/') => {
    readdirSync(dir).forEach(dirs => {
        const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith('.js'));

        for (const event of events) {
            const evt = require(`../${dir}/${dirs}/${event}`);
            const evtName = event.split('.')[0];
            console.log('\x1b[36m', `EVENT LOADED -> ${evtName}`);
            client.on(evtName, evt.bind(null, client));
        };
    });
};

module.exports = {
    loadCommands,
    loadEvents
};