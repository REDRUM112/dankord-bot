const { Client, CommandInteraction } = require("discord.js");

module.exports = {
name:"echo",
description:"echo the message",
options: [ {
    name: "message",
    description: "content",
    type:"STRING",
    required: true
}],
    
    run: async(client,interaction, args) => {
       const [message] = args;
       interaction.followUp({content: message});
    },
};