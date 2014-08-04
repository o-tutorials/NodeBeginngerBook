/*
 * Passing functions around
 * 函数参数传递
 *
 * */
var http = require("http");
var url = require("url");
var Log = require("./Log");

var debug = Log.isDebug();
var TAG = "server.js";

function start(route, handle){
	Log.d(TAG, "start Create a Server, port 8888");
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		Log.d(TAG, "onRequest URL:" + pathname + " request.");

		var content = route(handle, pathname);

		response.writeHead(200, {"Content-Type":"text/plain"});
		response.write(content);
		response.end();
	}
	http.createServer(onRequest).listen(8888);
	Log.d(TAG, "Server has started.");
}

exports.start = start;

