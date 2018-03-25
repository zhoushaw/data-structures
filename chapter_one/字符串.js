
/*
	旋转词: 将前任意长度字符，放置字符后

	常考问题，str2是不是st1的旋转词

	解决思路:
	1.st2.len!=st1.len表明不是旋转词
	1.st1+st1形成的新字符串穷举了，st1可以形成的旋转词

	代码思路

	function isXuanZhuan(str1,str2){
		if(str1.length!=str2){
			return false;
		}

		var newStr = str1+str1;
		if(newStr.indexOf(str2)!==-1){
			return true;
		}else{
			return false;
		}
	}

	逆序字符串: 单词逆序，字符逆序。
	javascript中，由于原生提供方法丰富，实现较为简单

	单词逆序

	var str = 'hello world good bye world';
	console.log(str.split(' ').reverse().join(' '));

	字符逆序
	var str = 'hello world good bye world';
	console.log(str.split('').reverse().join(''));

	原单词进行逆序
	var str = 'hello world good bye world';
	var result = str.split(' ');
	var newArr = [];
	result.forEach((value,index)=>{
		value = value.split('');
		value = value.reverse().join('');
		newArr.push(value);
	});

	console.log(newArr);
*/




