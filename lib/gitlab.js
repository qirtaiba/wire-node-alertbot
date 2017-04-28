const config = require("../doraemon/configs/config")

// TODO: consider generate this per convo?
const sec = config.getGitlabSecret();

module.exports = {
	handleMessage(req, data, bot) {
		console.log("Handling gitlab request");
		console.log(req.headers);
	    if (!{}.hasOwnProperty.call(req.headers, 'x-gitlab-token')) {
	    	console.log("no x-gitlab-token header");
	    }
	    else if (req.headers['x-gitlab-token'] != sec){
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