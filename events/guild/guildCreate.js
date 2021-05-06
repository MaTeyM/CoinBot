module.exports = async (client, guild) => {
    let newGuild = {
        guildID: guild.id,
        guildName: guild.name
    }

    await client.createGuild(newGuild);
};