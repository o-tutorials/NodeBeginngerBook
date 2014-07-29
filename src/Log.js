function v(tag, msg){
	console.log("V: " + tag + ": " + msg);
}
function d(tag, msg){
	console.log("D: " + tag + ": " + msg);
}
function w(tag, msg){
	console.log("W: " + tag + ": " + msg);
}
function e(tag, msg){
	console.log("E: " + tag + ": " + msg);
}

function isDebug(){
	return true;
}

exports.v = v;
exports.d = d;
exports.w = w;
exports.e = e;
exports.isDebug = isDebug;

