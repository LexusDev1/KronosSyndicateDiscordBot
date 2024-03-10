require("dotenv/config");

const { 
    CommandHandler 
} = require("djs-commander");

const { 
    Client,
    GatewayIntentBits,
    Partials,
} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildInvites
    ],
    Partials: [
        Partials.Channel,
        Partials.Message,
        Partials.GuildMember
    ]
});

client.on("ready", async () => {
    console.log(`LOGGED AS: ${client.user.tag}`)
});

client.on("messageCreate ", async (message) => {
    console.log(`MESSAGE: ${message.content}`);
});

new CommandHandler({
    client,
});

client.login(process.env.TOKEN);