/*
	算法思路:
		从左往右遍历，在遍历的过程中，存下当前位置比已经比较过的最大数小的情况，为最右位置
		从最右位置，从右往左遍历，在遍历过程中，存下当前位置比已经比较过的最小的大的情况，为最小位置

*/

function findArea(arr){
	var leftIndex = 0;
	var rightIndex = 0;
	var max = arr[0];
	for(var i=0;i<arr.length;i++){
		if(max<arr[i]){
			max = arr[i];
		}else{
			rightIndex = i;
		}
	}

	var min = arr[rightIndex];
	for(var i=rightIndex;i>=0;i--){
		if(min>arr[i]){
			min = arr[i];
		}else{
			leftIndex = i;
		}
	}
	return [leftIndex,rightIndex];
}

var arr = [1,5,4,3,2,6,7];
console.log(findArea(arr));