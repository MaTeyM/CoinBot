const mongoose = require('mongoose');
const { DEFAULT_MEMBERS_SETTINGS } = require('../../config');

const memberSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    memberID: String,
    memberName: String,
    cash: {
        'type': Number,
        'default': DEFAULT_MEMBERS_SETTINGS.cash
    },
    date: {
        'type': Date,
        'default': DEFAULT_MEMBERS_SETTINGS.date
    }
});

module.exports = mongoose.model('Member', memberSchema);