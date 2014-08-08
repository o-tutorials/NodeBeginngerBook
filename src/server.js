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
		var postData = "";
		Log.d(TAG, "onRequest URL:" + pathname + " request.");

		request.setEncoding("utf8");

		request.addListener("data", function(postDataChunk){
			postData += postDataChunk;
			Log.d(TAG, "data.Listener ->Received POST data chunk: '" + postDataChunk + "'.");
		});

		request.addListener("end", function(){
			Log.d(TAG, "end.Listener");
			route(handle, pathname, response, postData);
		});
	}

	http.createServer(onRequest).listen(8888);
	Log.d(TAG, "Server has started.");
}

exports.start = start;

