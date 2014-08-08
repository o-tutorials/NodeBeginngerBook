var Log = require("./Log");
var TAG = "requestHandlers";

function start(){
	function sleep(milliSeconds){
		Log.d(TAG, "sleep " + milliSeconds + " milliSeconds.");
		var startTime = new Date().getTime();
		while(new Date().getTime() < startTime + milliSeconds);
	}
	Log.d(TAG, "Request handler start was called.");
	sleep(10000);
	return "start - Hello, world.";
}

function upload(){
	Log.d(TAG, "Request handler upload was called.");
	return "upload - Hello, world.";
}

exports.start = start;
exports.upload = upload;

