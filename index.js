const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
    host: 'picction.aternos.me', // Replace with your Aternos server IP
    port: 52119, // Default Minecraft Java port
    username: 'AFK_Bot' // Bot's in-game name
});

bot.on('spawn', () => {
    console.log('Bot joined the server!');
});

bot.on('chat', (username, message) => {
    if (username === bot.username) return; // Ignore bot's own messages
    if (message === 'hi') {
        bot.chat(`Hello, ${username}!`);
    }
});

bot.on('end', () => {
    console.log('Bot disconnected, reconnecting...');
    setTimeout(() => {
        bot.connect();
    }, 5000); // Reconnect after 5 seconds
});

