const { Client, Collection } = require("discord.js");
var os = require('os');
var chilkat = require('@chilkat/ck-node16-linux64'); 

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
    var glob = new chilkat.Global();
    var success = glob.UnlockBundle("STFFDY.CB4062022_QZJKHUHcn5mi");
    if (success !== true) {
        console.log(glob.LastErrorText);
        return;
    }

    var status = glob.UnlockStatus;
    if (status == 2) {
        console.log("Unlocked using purchased unlock code.");
    }
    else {
        console.log("Unlocked in trial mode.");
    }

// The LastErrorText can be examined in the success case to see if it was unlocked in
// trial more, or with a purchased unlock code.
console.log(glob.LastErrorText);
// Initializing the project
require("./handler")(client);

client.login(client.config.token);
