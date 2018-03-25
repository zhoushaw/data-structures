/*
	算法实现思路:

	遍历数组，遍历到第i个，将第i个与第i个之前的一次比较，当i比前面一个小时插入到对应位置
*/

function insertSort(arr){
	if(!arr||arr.length==1||arr.length==0){
		return arr;
	}

	var temp,index;
	for(var i=0;i<arr.length;i++){
		temp = arr[i];
		index = i-1;
		// 当比较到的位置是第一个或当前比较的值小于对比的值时终止比较
		while(index>-1&&arr[index]>temp){
			// 将已经比较过的数组元素向后移动
			arr[index+1] = arr[index];
			index--;
		}
		// 因为最后比较的数，小于存储的值时，还是进行了减少一个值得操作，所以这里要加上1
		arr[index+1] = temp;
	}
	return arr;
}

var arr = [12,4,12,4,5,23,4,5,7,9,2];
console.log(insertSort(arr));