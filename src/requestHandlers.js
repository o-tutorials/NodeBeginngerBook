var Log = require("./Log");
var TAG = "requestHandlers";

function start(){
	Log.d(TAG, "Request handler start was called.");
	return "start - Hello, world.";
}

function upload(){
	Log.d(TAG, "Request handler upload was called.");
	return "upload - Hello, world.";
}

exports.start = start;
exports.upload = upload;

