module.exports = {
	handleMessage(req, data) {
		console.log("*** handling message");
		console.log(req.headers);
	    if (!{}.hasOwnProperty.call(req.headers, 'x-gitlab-token')) {
	      console.log("no header");
	    }
	    //oowohf7eih8boo0iqu5Deifie~gh~ohLoo]wee8E
	    console.log(req.headers['x-gitlab-token']);
	    console.log(req.headers.x-gitlab-token);
	},
};