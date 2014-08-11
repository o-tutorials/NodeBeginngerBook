var Log = require("./Log");
var exec = require("child_process").exec;
var querystring = require("querystring"),
	fs = require('fs'),
	formidable = require('formidable');

var TAG = "requestHandlers.js";

/*
function start(){
	function sleep(milliSeconds){
		Log.d(TAG, "sleep " + milliSeconds + " milliSeconds.");
		var startTime = new Date().getTime();
		while(new Date().getTime() < startTime + milliSeconds);
	}
	Log.d(TAG, "Request handler start was called.");
	sleep(10000);
	return "start - Hello, world.";
*/

function start(response){
	Log.d(TAG, "Request handler start was called.");

	exec("ls -laF",
		{ timeout: 100, maxBuffer: 2*1024 },
		function(error, stdout, stderr){
			Log.d(TAG, "stdout: " + stdout);
			response.writeHead(200, {"Content-Type": "text/plain"});
			response.write(stdout);
			response.end()
		});
}

function starts(response, request){
	Log.d(TAG, "Request handler 'post' was called.");
/**********
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
		*******************/
	var body = '<html>'
		+ '<meta http-eqiv="content-type" content="text/html; charset=UTF-8" />'
		+ '</head>'
		+ '<body>'
		+ '<form action="/upload" enctype="multipart/form-data" method="post">'
		+ '<input type="file" name="upload" multiple="multiple">'
		+ '<input type="submit" value="Upload file" />'
		+ '</form>'
		+ '</body>'
		+ '</html>';
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

//function upload(response, postData){
function upload(response, request){
	var form = new formidable.IncomingForm();
	//var tmp = querystring.parse(postData).text;
	//Log.d(TAG, "postData: '" + postData + "'.");
	Log.d(TAG, "about to parse.");
	Log.d(TAG, "Request handler upload was called.");
	//Log.d(TAG, "tmp: '" + tmp + "'.");
	form.parse(request, function(error, fields, files){
		Log.d(TAG, "parsing done.");
		/** Possible error on Windows systems
		 * tried to rename to an already existing file
		 * */
		Log.d(TAG, "files: " + files.upload);
		if(typeof(files.upload) == 'undefined' || files.upload == ''){
			Log.d(TAG, "files.upload is undefined.");
			response.writeHead(404, {'content-type': 'text/plain'});
			response.write('404 not found.');
			response.end();
		}else{
			fs.rename(files.upload.path, "/tmp/test.png", function(error){
				if(error){
					fs.unlink('/tmp/test.png');
					fs.rename(files.upload.path, '/tmp/test.png');
				}
			});
			response.writeHead(200, {"Content-Type": "text/html"});
			response.write("received image.<br />");
			response.write("<img src='/show' />");
			response.end();
		}
	});
}

function show(response, postData){
	Log.d(TAG, "Request handler 'show' was called.");
	fs.readFile("/tmp/test.png", "binary", function(error, file){
		if(error){
			response.writeHead(500, {'content-type': 'text/plain'});
			response.write(error + '\n');
			response.end();
		}else{
			response.writeHead(200, {'content-type': 'image/png'});
			response.write(file, 'binary');
			response.end()
		}
	});
}

exports.start = start;
// Add this just for post
exports.starts = starts;
exports.upload = upload;
exports.show = show;

