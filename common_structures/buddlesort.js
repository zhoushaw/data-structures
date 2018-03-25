function buddlesort(arr){
	console.time('buddlesort');
	for(let i = 0;i < arr.length;i++){
		//每次执行完成最后一个已经变成最大的数了，所以不需要在比较最后一个
		for(let j = 0;j<arr.length-i;j++){
			if(arr[j]>arr[j+1]){
				var temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	console.timeEnd('buddlesort');
	console.log('最后排序结果',arr);
	return arr;
}

var arr = [32,23,523,56,7,1,432];

buddlesort(arr);