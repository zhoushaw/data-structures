// 给定一个int矩阵mat，同时给定矩阵大小nxm及待查找的数x，请返回一个bool值，代表矩阵中是否存在x。所有矩阵中数字及x均为int范围内整数。保证n和m均小于等于1000。

// 测试样例：
// [[1,2,3],[4,5,6],[7,8,9]],3,3,10

function findNum(arr,num){
	var len = arr.length-1;
	var index = 0;
	var hasNum = false;

	while(len>=0&&index<arr[len].length){
		if(num==arr[len][index]){
			hasNum = true;
			break;
		}

		if(num<arr[len][index]){
			len--;
		}else if(num>arr[len][index]){
			index++;
		}
	}
	return hasNum;
}
var arr = [[1,2,3],[4,5,6],[7,8,9]];
console.log(findNum(arr,6));