const config = require("../doraemon/configs/config")

module.exports = {
	handleMessage(req, data, bot) {
		console.log("Handling gitlab request");
		var token = bot.getGitlabToken();
		console.log(`Got saved token: ${token}`);
	    if (!{}.hasOwnProperty.call(req.headers, 'x-gitlab-token')) {
	    	console.log("no x-gitlab-token header");
	    }
	    else if (req.headers['x-gitlab-token'] != token){
	    	console.log("wrong gitlab token no process");
	    }
	    else if (!{}.hasOwnProperty.call(req.headers, 'x-gitlab-event')) {
			console.log("no x-gitlab-event header");
	    }
	    else {
	    	switch (req.headers['x-gitlab-event']) {
	    		case 'Push Hook':
	    			console.log("Handling Push Hook");
	    			bot.onGitlabPush(data);
	    			break;
    			default:
    				console.log(`Unknown event: ${req.headers['x-gitlab-event']}`);
	    	}
	    }
	},
};