function findMaxValue(arr){
	if(arr.length<2){
		return 0;
	}
	var newArr = arr.sort((a,b)=>a-b);
	var max = newArr[0]-newArr[1];
	for(var i=1;i<newArr.length;i++){
		if((newArr[i+1]-newArr[i])>max){
			max = newArr[i+1]-newArr[i];
		}
	}
	return max;
}

var arr = [1,2,5,4,6];
console.log(findMaxValue(arr));