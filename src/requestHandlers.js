var Log = require("./Log");
var exec = require("child_process").exec;
var querystring = require("querystring");

var TAG = "requestHandlers.js";

function start(response){
	Log.d(TAG, "Request handler start was called.");

	exec("find /",
		{ timeout: 10000, maxBuffer: 20000*1024 },
		function(error, stdout, stderr){
			Log.d(TAG, "stdout: " + stdout);
			response.writeHead(200, {"Content-Type": "text/plain"});
			response.write(stdout);
			response.end()
		});
}

function starts(response, postData){
	Log.d(TAG, "Request handler 'post' was called.");
	var body = '<html>'
		+ '<head>'
		+ '<meta http-equiv="Content-Type" content="text/html '
		+ 'Charset="UTF-8" />'
		+ '</head>'
		+ '<body>'
		+ '<form action="/upload" method="post">'
		+ '<textarea name="text" rows="20" cols="60"></textarea>'
		+ '<input type="submit" value="Submit text" />'
		+ '</form>'
		+ '</body>'
		+ '</html>';
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

function upload(response, postData){
	var tmp = querystring.parse(postData).text;
	Log.d(TAG, "postData: '" + postData + "'.");
	Log.d(TAG, "Request handler upload was called.");
	Log.d(TAG, "tmp: '" + tmp + "'.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("upload - Hello, world. You've send: '" + tmp + "'.");
	response.end();
}

exports.start = start;
exports.starts = starts;
exports.upload = upload;

