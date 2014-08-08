/**
 * This is a Log class for format display log system firendly
 */
function keep2(v){
	return ((v)>9?(v):("0"+(v)));
}

function timeTag(){
	var tmp = new Date();
	return (tmp.getFullYear()
				+ "." + keep2(tmp.getMonth()+1)
				+ "." + keep2(tmp.getDate())
				+ " " + keep2(tmp.getHours())
				+ ":" + keep2(tmp.getMinutes())
				+ ":" + keep2(tmp.getSeconds())
				+ "." + tmp.getMilliseconds());
}

function v(tag, msg){
	if(isDebug())
		console.log(timeTag() + " V: " + tag + ": " + msg);
}

function d(tag, msg){
	if(isDebug())
		console.log(timeTag() + " D: " + tag + ": " + msg);
}

function w(tag, msg){
	if(isDebug())
		console.log(timeTag() + " W: " + tag + ": " + msg);
}

function e(tag, msg){
	if(isDebug())
		console.log(timeTag() + " E: " + tag + ": " + msg);
}

function isDebug(){
	return true;
}

exports.v = v;
exports.d = d;
exports.w = w;
exports.e = e;
exports.timeTag = timeTag;
exports.isDebug = isDebug;

