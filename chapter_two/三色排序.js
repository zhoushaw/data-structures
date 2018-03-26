function sort(arr){
	var left = -1;
	var right = arr.length;
	var i =0;
	while(i<right){
		if(arr[i]==2){
			swape(arr,i,--right);
		}else if(arr[i]==0){
			swape(arr,i,++left);
			i++;
		}else{
			i++;
		}
	}

	return arr;
}
function swape(arr,i,j){
	if(i!=j){
		var temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	return arr;
}

var arr = [0,1,2,1,2,1,2,1,2,0];
console.log(sort(arr))