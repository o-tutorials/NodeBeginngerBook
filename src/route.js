var Log = require("./Log");
var TAG = "route.js";

function route(handle, pathname) {
	Log.d(TAG, "route request for " + pathname);
	if(typeof handle[pathname] === 'function'){
		//Log.d(TAG, "function is: " + handle[pathname]);
		return handle[pathname]();
	}else{
		Log.d(TAG, "No request handler found for " + pathname);
		return "404 Not Found.";
	}
}

exports.route = route;
