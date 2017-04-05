module.exports = {

	name: "help",
	author: "Nioxed",

	helptext: {
		title: "help",
		description: "You are here.",
		usage: "help < command >"

	},

	onInit: function(){
		
		// Require your modules and set variables needed on bot start.
		// Don't forget to add them to the package.json!
		cool = require('cool-ascii-faces');

	},

	onTrigger: function(userID, channelID, arguments, event){

		// Here is what happens when the command is executed by an user.

        if(args[0]){

            if(commands[args[0]]){
                helpText = "**" + commands[args[0]].helptext.title + "**\n"
                helpText += "```" + commands[args[0]].helptext.description + "``` \n"
                helpText += "**Usage:** " + config.commands.prefix + commands[args[0]].helptext.usage + ""

                bot.sendMessage({
                    to: channelID,
                    message: helpText
                });
            }

        }else{

            var helpText = "**" + bot.username + "** command list \n\n"

            for(var i = 0; i < Object.keys(commands).length; i++){
                helpText += "`" + config.commands.prefix + commands[Object.keys(commands)[i]].name + "` ";
            }

            helpText += "\n\n **To get detailed info about a command, Use "+config.commands.prefix+"help < command >**"

            bot.sendMessage({
                to: channelID,
                message: helpText
            });

        }


	}
}