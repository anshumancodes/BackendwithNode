import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'ask',
    description: 'Replies your answers because you gott -95iq',
  },
];

const rest = new REST({ version: '10' }).setToken("token");

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("1222973621761474570"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}