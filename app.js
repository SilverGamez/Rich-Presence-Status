const DiscordRPC = require('discord-rpc'); //npm i discord-rpc
const client = new DiscordRPC.Client({ transport: 'ipc' }); 
require('dotenv').config();
(async () => {
    client.on('ready', async () => {
        await client.setActivity({
            buttons: [
                { label: "Button 1", url: "BUTTON 1 URL"},
                { label: "Button 2", url: 'BUTTON 2 URL'}
            ],
            details: "PUT YOUR DESCRIPTION HERE"
        }).catch(err => console.log(err));

        console.log("Discord Rich Presence has been enabled.");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error); 
})();