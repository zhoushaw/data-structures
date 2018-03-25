/*
	冒泡排序 时间复杂度O(n^2)	读作big O(欧) n
	选择排序 时间复杂度O(n^2)	
	插入排序 时间复杂度O(n^2)	

	归并排序	时间复杂度O(N*logN);
	快速排序	O(N*logN);
	堆排序 O(N*logN)
	希尔排序 O(N*logN)
*/

function insertSort(arr){
	if(arr.length==0||arr.length==1){
		return arr;
	}

	for(var i=0;i<arr.length;i++){
		var temp = arr[i];
		var index = i-1;
		while(index>-1&&arr[index]>temp){
			arr[index+1] = arr[index];
			index--;
		}
		arr[index+1] = temp;
	}
	return arr;
}
var arr = [1,34,1,3,5,7,9,3,121,34,1];
console.log(insertSort(arr));