/*
	时间复杂度O(n^2)	读作big O(欧) n
*/

function BubbleSort(arr){
	var temp = 0;
	if(!arr||arr.length==1||arr.length==0){
		return arr;
	}
	for(var i=0;i<arr.length;i++){
		for(var j=0;j<arr.length-i;j++){
			if(arr[j]>arr[j+1]){
				temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}
var arr = [1,2,3,5,2,3];
console.log(BubbleSort(arr));