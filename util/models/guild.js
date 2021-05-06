const mongoose = require('mongoose');
const { DEFAULT_GUILD_SETTINGS } = require('../../config');

const guildSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    prefix: {
        'type': String,
        'default': DEFAULT_GUILD_SETTINGS.prefix
    },
    logChannel: {
        'type': String,
        'default': DEFAULT_GUILD_SETTINGS.logChannel
    }
});

module.exports = mongoose.model('Guild', guildSchema);