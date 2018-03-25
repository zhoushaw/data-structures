// var str = 'nishi134nishi';
// var arr = [];
// if(str.indexOf('nishi')!='-1'){
// 	arr.push(str.indexOf('nishi')!='-1')
// }
// console.log(arr);


function fn1(){
	var str  = 1;
	return function(){
		return{
			str
		}
	}
}

function fn2(){
	var Fn = fn1()();
	return function(){
		console.log(Fn.str);
	}
}

fn2()();