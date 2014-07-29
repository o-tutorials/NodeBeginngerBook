var Log = require("./Log");
var TAG = "route.js";

function route(pathname) {
	Log.d(TAG, "route request for " + pathname);
}

exports.route = route;
