/*
	基本思路:
		从左向右遍历，当前值等于2时，将值与right位置的值替换，--right。right初始值为数组长度
		当前位置的值等于0时，与最左边值进行交换，并增加i的值，因为与右边进行交换时并不知道交换过来的值是0、1、2所以不能i++，需要验证后在增加
		都不是的话i++,继续向后遍历
*/

function sort(arr){
	var left = 0;
	var right = arr.length-1;
	var i =0;
	while(i<right){
		if(arr[i]==2){
			swape(arr,i,right--);
		}else if(arr[i]==0){
			swape(arr,i,left++);
			i++;
		}else{
			i++;
		}
	}

	return arr;
}
function swape(arr,i,j){
	if(i!=j){
		var temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	return arr;
}

var arr = [0,1,2,1,2,1,2,1,2,0];
console.log(sort(arr))