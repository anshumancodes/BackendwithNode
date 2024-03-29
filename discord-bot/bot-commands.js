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

const rest = new REST({ version: '10' }).setToken("MTIyMjk3MzYyMTc2MTQ3NDU3MA.GMLLA_.ok1hifV2KaC8foOl4CXce1kBd7a3VRauDxk5Dw");

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("1222973621761474570"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}