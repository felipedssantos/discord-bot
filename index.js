// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

async function main() {
  // When the client is ready, run this code (only once)
  client.once('ready', () => {
    console.log('Ready!');
  });

  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
      await interaction.reply('Pong!');
    } else if (commandName === 'server') {
      await interaction.reply('Server info testeeeee.');
    } else if (commandName === 'user') {
      await interaction.reply('User info.');
    }
  });

  // Login to Discord with your client's token
  await client.login(process.env.BOT_TOKEN);

  await cleanUp();

  async function cleanUp() {
    client.destroy();
  }
}

main();
