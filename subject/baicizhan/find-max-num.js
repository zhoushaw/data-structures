/**
	数组中只有字母或数字，从中找出最大数字
	列入:
	zhoushaw1314woshi520
	当初做的时候没有判断，只有字母的情况
*/
var lines = 'wefw';
var reg = /[^0-9]/g;
var newStr = lines.replace(reg,',').split(",");
var newArr = newStr.sort((a,b)=>a-b);
console.log(newArr[newArr.length-1]);