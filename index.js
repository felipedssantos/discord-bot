// Require the necessary discord.js classes
const { format } = require('date-fns');
const { ptBR } = require('date-fns/locale/pt-BR');
const { Client, Intents } = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

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
    await interaction.reply(
      `Nome do servidor: ${interaction.guild.name}
      Total de mrmbros: ${interaction.guild.memberCount}
      Data de criação: ${format(
        new Date(interaction.guild.createdAt),
        'dd/MM/yyyy',
        { locale: ptBR }
      )}
      `
    );
  } else if (commandName === 'user') {
    await interaction.reply('User info.');
  }
});

// Login to Discord with your client's token
client.login(process.env.BOT_TOKEN);
