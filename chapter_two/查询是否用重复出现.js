// 请设计一个高效算法，判断数组中是否有重复值。必须保证额外空间复杂度为O(1)。

// 给定一个int数组A及它的大小n，请返回它是否有重复值。

function hasRepeat(arr){
	if(arr.length==1||!arr){
		return false;
	}
	var hasRepeat = false;
	for(var i=0;i<arr.length;i++){
		var temp = arr[i];
		var index = i;
		while(index-1>-1&&arr[index]<arr[index-1]){
			arr[index] = arr[index-1];
			index--;
		}
		arr[index] = arr[i];
	}

	for(var i=0;i<arr.length;i++){
		if(arr[i]==arr[i+1]){
			hasRepeat = true;
		}
	}
	return hasRepeat;
}

var arr = [5,1,2,3,4,5,6];
console.log(hasRepeat(arr));