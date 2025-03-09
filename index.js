const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
    host: 'picction.aternos.me', // Replace with your Aternos server IP
    port: 52119, // Default Minecraft Java port
<<<<<<< HEAD
    username: 'Dream' // Bot's in-game name
=======
    username: 'Dream' // Bot's in-game name
>>>>>>> 7b68150 (First commit)
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

