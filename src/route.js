var Log = require("./Log");
var TAG = "route.js";

function route(handle, pathname, response, postData) {
	Log.d(TAG, "route request for " + pathname);
	if(typeof handle[pathname] === 'function'){
		//Log.d(TAG, "This is a function..");
		handle[pathname](response, postData);
	}else{
		Log.d(TAG, "No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not Found.");
		response.end()
	}
}

exports.route = route;
