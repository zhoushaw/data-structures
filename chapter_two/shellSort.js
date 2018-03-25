
/*
	主要思路:

	将设置一个步长，这里的步长是根据，h = h*3+1;推算出来最佳步长，
	每次循环遍历，将当前值与当前位置减去h个进行比较，如果比后者小，进行位置交换，每次循环遍历完成，减少步长
*/

function shellSort(arr){
	var N = arr.length;
	var h = 1;
	while(h<N/3){
		h = h*3+1;
	}

	while(h>=1){
		for(var i=h;i<N;i++){
			for(var j=i;j>=h&&arr[j]<arr[j-h];j-=h){
				swap(arr,j,j-h);
			}
		}
		h = (h-1)/3;
	}
	return arr;

}
function swap(arr,i,j){
	var temp = arr[j];
	arr[j] = arr[i];
	arr[i] = temp;
}


var arr = [1,312,45,73,13,4,5];
console.log(shellSort(arr));