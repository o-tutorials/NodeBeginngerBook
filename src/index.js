var server = require("./server");
var router = require("./route");
var Log = require("./Log");

var TAG = "index.js";

Log.d(TAG, "server will start.");
server.start(router.route);
