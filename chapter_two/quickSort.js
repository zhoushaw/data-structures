function quickSort(arr){
	if(arr.length == 0||arr.length==1){
		return arr;
	}

	var middle = 0;
	var leftArr = [];
	var rightArr = [];

	middle = arr.splice(Math.floor(arr.length/2),1);

	for(var i=0;i<arr.length;i++){
		if(arr[i]<middle){
			leftArr.push(arr[i]);
		}else{
			rightArr.push(arr[i]);
		}
	}

	return quickSort(leftArr).concat(middle,quickSort(rightArr));
}

var arr = [2,1,13,23,1,35,7,8,9,4,3];
console.log(quickSort(arr));