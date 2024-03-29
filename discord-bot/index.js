const { Client, GatewayIntentBits, Message } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds , GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });
const { ask } = require("./ai");



client.on("messageCreate",(message)=>{
   if(!message.author.bot){
    if(message.content.startsWith("!ask")){
        const question=message.content.split("!ask");
        const answer=ask(question);//calling the ai function
        message.channel.send(`${answer}`).catch(console.error); //sending the response 
    }

    else{
        message.reply("hey there ! this is wojak bot ");
    }

   }
})
client.on("ready", () =>{
    console.log("The AI bot is online"); //message when bot is online
});




client.login(BOT_TOKEN);