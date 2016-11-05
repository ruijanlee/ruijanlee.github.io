#!/usr/local/bin/node

var md5 = require('./md5');

var mm = md5.md5(process.argv[2]);

mm = mm.toUpperCase()

//for debug
// console.log('debug: \nMD5(' + process.argv[2] + '):' + mm);

function p (str) {
	console.log(str)
}

function srt_to_arr (srt) {
	let tmp_arr = []
	for ( let i in srt ){
		tmp_arr.push(srt[i])
	}
	return tmp_arr
}

function arr_to_srt (arr) {
	let tmp = ''
	for (let i in arr) {
		tmp = tmp + arr[i]
	}
	return tmp
}

function alpha2digit (str) {
	if (isNaN(str)) {
		var tmp = str.charCodeAt()
		tmp = tmp%65%10
		return tmp
	}
	else {
		return str
	}
}

function digit2symbol (dig) {
	var mymap = ")!@#$%^&*("
	return mymap[dig]
}

function alpha2symbol (str) {
	return digit2symbol(alpha2digit(str))
}

function str2digit (str) {
	var tmp = srt_to_arr(str)
	for (x in tmp) {
		tmp[x] = alpha2digit(tmp[x])
	}
	tmp = arr_to_srt(tmp)
	return tmp
}

function str2symbol (str) {
	var tmp = srt_to_arr(str)
	for (x in tmp) {
		tmp[x] = alpha2symbol(tmp[x])
	}
	tmp = arr_to_srt(tmp)
	return tmp
}

function pwd6 (str) {
	var t = str.substr(0,6)
	return str2digit(t)
}

function pwd13 (str) {
	let t = str.substr(0,12)
	let t1 = t.substr(0,6)
	let t2 = t.substr(6,6)

	// p(t1)
	// p(t2)
	// p(str2digit(t2))

	t2 = str2symbol(t2)
	return 'p' + t1 + t2
}

//debug
// p(pwd13(mm))

p(pwd6(mm))