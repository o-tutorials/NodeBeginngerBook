// This area have require includes
var server = require("./server");
var router = require("./route");
var Log = require("./Log");
var requestHandlers = require("./requestHandlers");

// This area is global variables
var TAG = "index.js";
var handle = {};

// init handle
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/starts"] = requestHandlers.starts;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

Log.d(TAG, "server will start.");
Log.d(TAG, "num:" + (1-0.1*7));
server.start(router.route, handle);

