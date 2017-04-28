module.exports = {
	handleMessage(req, data) {
	    if (!{}.hasOwnProperty.call(req.headers, 'X-Gitlab-Token')) {
	      return false;
	    }
	    //oowohf7eih8boo0iqu5Deifie~gh~ohLoo]wee8E
	    console.log(req.headers.X-Gitlab-Token);
	}	
};