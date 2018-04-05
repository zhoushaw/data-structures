
var arr=[1,2,3],newArr=[],boss=[];

for(var i=0; i<arr.length; i++){
	if(arr[i] + 1 ===arr[i+1]){
		newArr.push(arr[i]);
		newArr.push(arr[i+1]);
	}
}
var x = [...new Set(newArr)];

if(newArr[0] >=3){
	for(var i=0; i<arr.length; i++){
		if(i<arr.indexOf(newArr[0])){
			boss.push(arr[i])
		}else if(i === arr.indexOf(newArr[0])){
			boss.push(arr[i] + '-' + arr[arr.indexOf(newArr[newArr.length - 1])])
		}else if(i > arr.indexOf(newArr[newArr.length - 1])){
			boss.push(arr[i])
		}
	}
	console.log(boss);
}else{
	for(var i=0; i<arr.length; i++){
		boss.push(arr[i])
	}
}
console.log(boss.join(','));