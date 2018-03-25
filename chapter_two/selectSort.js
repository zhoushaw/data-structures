/*
	基本实现思路，遍历数组，从第i个其，从arr[arr.length]~arr[i]个选出最小的放到i的位置，
	再从i+1,arr.length-1个中选出最小的放到i+1的位置
*/

function selectSort(arr){
	if(!arr||arr.length==1||arr.length==0){
		return arr;
	}
	var minIndex = 0;
	for(var i=0;i<arr.length;i++){
		minIndex = i;
		for(var j=i+1;j<arr.length;j++){
			if(arr[minIndex]>arr[j]){
				minIndex = j;
			}
		}
		if(minIndex!=i){
			var temp = arr[minIndex];
			arr[minIndex] = arr[i];
			arr[i] = temp;
		}
	}
	return arr;
}

var arr = [1,3,2,4,5,6,6];
console.log(selectSort(arr));