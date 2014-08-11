var Log = require("./Log");
var TAG = "route.js";

function route(handle, pathname, response, request) {
	Log.d(TAG, "route request for " + pathname);
	if(typeof handle[pathname] === 'function'){
		//Log.d(TAG, "This is a function..");
		//handle[pathname](response, postData);
		handle[pathname](response, request);
	}else{
		Log.d(TAG, "No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/html"});
		response.write("404 Not Found.");
		response.end()
	}
}

exports.route = route;
