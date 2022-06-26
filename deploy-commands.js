const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
require('dotenv').config();

const commands = [
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Responde com a palavra Pong!'),
  new SlashCommandBuilder()
    .setName('server')
    .setDescription('Responde com as informações do servidor.'),
  new SlashCommandBuilder()
    .setName('user')
    .setDescription(
      'Responde com as informações do usuário que enviou a mensagem.'
    ),
].map((command) => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

rest
  .put(
    Routes.applicationGuildCommands(process.env.APP_ID, process.env.GUILD_ID),
    { body: commands }
  )
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);
