module.exports = {
	handleMessage(req, data) {
		console.log("*** handling message");
	    if (!{}.hasOwnProperty.call(req.headers, 'X-Gitlab-Token')) {
	      console.log("no header");
	    }
	    //oowohf7eih8boo0iqu5Deifie~gh~ohLoo]wee8E
	    console.log(req.headers['X-Gitlab-Token']);
	},
};