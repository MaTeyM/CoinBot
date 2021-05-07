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
    },
    work_cooldown: {
      'type': String,
      'default': DEFAULT_GUILD_SETTINGS.work_cooldown
    },
    work_gain: {
      'type': String,
      'default': DEFAULT_GUILD_SETTINGS.work_gain
    }
});

module.exports = mongoose.model('Guild', guildSchema);
