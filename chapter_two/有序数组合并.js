// 有两个从小到大排序以后的数组A和B，其中A的末端有足够的缓冲空容纳B。请编写一个方法，将B合并入A并排序。

// 给定两个有序int数组A和B，A中的缓冲空用0填充，同时给定A和B的真实大小int n和int m，请返回合并后的数组。

function mergeArr(arrA,arrB,i,j){
	var h = i+j-1;
	var i = i-1;
	var j = j-1;
	while(i>=0&&j>=0){
		arrA[h--] = arrA[i]>arrB[j]?arrA[i--]:arrB[j--];
	}
	while(j>=0){
		arrA[h--] = arrB[j--];
	}
	return arrA;
}

var arrA = [1,3,7,9,12,45,123,0,0,0,0,0,0,0,0];
var arrB = [2,4,6,8,9,11];
console.log(mergeArr(arrA,arrB,7,6));