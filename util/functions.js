const { Guild, Member } = require("./models/index");
const {
  DEFAULT_GUILD_SETTINGS,
  DEFAULT_MEMBERS_SETTINGS,
} = require("../config");
const mongoose = require("mongoose");

module.exports = (client) => {
  client.createGuild = async (guild) => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, guild);
    const createGuild = new Guild(merged);
    createGuild.save();
  };

  client.getGuild = async (guild) => {
    const data = await Guild.findOne({ guildID: guild.id });
    if (data) return data;
    return DEFAULT_GUILD_SETTINGS;
  };

  client.updateGuild = async (guild, settings) => {
    let data = await client.getGuild(guild);
    if (typeof data !== "object") data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
    }
    return data.updateOne(settings);
  };

  client.createMember = async (member) => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, member);
    const createMember = new Member(merged);
    createMember.save();
  };

  client.getMember = async (member, guild) => {
    const data = await Member.findOne({
      guildID: guild.id,
      memberID: member.id,
    });
    if (data) return data;
    return DEFAULT_MEMBERS_SETTINGS;
  };

  client.updateMember = async(member, guild, settings) => {
    let data = await client.getMember(member, guild);
    if (typeof data !== "object") data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
    }
    return data.updateOne(settings);
  };

  client.getMembers = async(guild) => {
    const data = await Member.find({ guildID: guild.id });
    if(data) return data;
    else return;
  };

  client.addMoney = async(member, guild, money) => {
    const userToUpdate = await client.getMember(member);
    const updatedMoney = userToUpdate.cash + money;
    await client.updateMember(member, guild, { cash: updatedMoney });
  };
};
