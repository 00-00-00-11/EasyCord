module.exports = {

	name: "ping",
	author: "Nioxed",

	helptext: {
		title: "Ping",
		description: "Test command to see if the bot can respond.",
		usage: "ping"
	},


	// The permission system is role-based.
	// Set the permission to the name of the role required to use the command.
	// If you want to, You can make a role for every command and assign command access on a per-person level.

	permission: "everyone",


	// This function gets called when your command is ready to initialize any extra modules needed.
	// Require your extra modules here, An error will be thrown when the module is not installed.

	modules: function(){

		// mod = require('my-cool-module');

	},


	// The initialization function. Define any preset variables and timers here.
	// This function gets called right after the modules function, Before the bot is logged in.
	// You should NOT use this to interact with the bot.

	onInit: function(){

		//Initalize stuff here.

	},

	
	// The onTrigger function gets ran every time the command is executed.
	// Define your function actions here. Since this bot is built upon discord.io use the discord.io method to send response messages.

	onTrigger: function(userID, channelID, serverID, arguments, message,  event){

		// Since this is a simple ping example all we will do is respond with a message.

		bot.sendMessage({
            to: channelID,
            message: ":ping_pong:"
        });


	}
}