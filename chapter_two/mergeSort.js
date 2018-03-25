/*

	具体思路
	递归调用，将1个数组合成两个，两个合成四个，在合成的过程中进行排序
*/





function merge(left,right){
	var result = [];
	// 当left和right有序时可以采用这种合并方法
	while(left.length>0&&right.length>0){
		if(left[0]>right[0]){
			result.push(right.shift(0,1));
		}else{
			result.push(left.shift(0,1));
		}
	}
	return result.concat(left).concat(right);
}

function mergeSort(arr){
	if(arr.length==1){
		return arr;
	}
	var middle = Math.floor(arr.length/2);
	var left = arr.slice(0,middle);
	var right = arr.slice(middle);
	// 进行递归合并
	return merge(mergeSort(left),mergeSort(right));
}

var arr = [1,2,456,23,4,12,4,5,1,4,6,3];
console.log(mergeSort(arr));