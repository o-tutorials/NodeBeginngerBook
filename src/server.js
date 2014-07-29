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

function start(route){
	Log.d(TAG, "start Create a Server, port 8888");
	http.createServer(function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		Log.d(TAG, "onRequest URL:" + pathname + " request.");
		route(pathname);
		response.writeHead(200, {"Content-Type":"text/plain"});
		response.write("This is a test");
		response.end();
	}).listen(8888);
}

exports.start = start;
