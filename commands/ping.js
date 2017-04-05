module.exports = {

	name: "ping",
	author: "Nioxed",

	helptext: {
		title: "Ping",
		description: "Test command to see if the bot can respond.",
		usage: "ping"
	},
	onInit: function(){
		
		// Require your modules and set variables needed on bot start. ( THIS HAPPENS BEFORE THE BOT IS LOGGED IN!! )

	},

	onTrigger: function(userID, channelID, arguments, event){

		// Here is what happens when the command is executed by an user.
		bot.sendMessage({
            to: channelID,
            message: ":ping_pong:"
        });

	}
}