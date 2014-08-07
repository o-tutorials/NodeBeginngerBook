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

Log.d(TAG, "server will start.");
server.start(router.route, handle);

