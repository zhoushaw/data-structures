function selectionSort(arr){
	let minIndex,temp
	for(let i=0;i<arr.length;i++){
		minIndex = i
		for(let j=i+1;j<arr.length;j++){
			if(arr[j]<arr[minIndex]){
				minIndex = j
			}
		}
		temp = arr[i]
		arr[i] = arr[minIndex]
		arr[minIndex] = temp
	}
	console.log('排序过后的内容',arr);
	return arr;
}

let arr = [123,43,231,4,5,2,1245,5,21,56,8,12];
selectionSort(arr);