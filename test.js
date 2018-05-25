/*
// 数字全排
var result = [];
function permutation(arr,start){
    if(arr.length-1==start){
        return result.push(arr.join(''));
    }else{
        for(var i=0;i<arr.length;i++){
            swape(arr,i,start);
            permutation(arr,start+1);
            swape(arr,i,start);
        }
    }
}

function swape(arr,i,j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

var arr = [1,2,3,4];
permutation(arr,0);
result = [...new Set(result)];

console.log(result);
*/

// 快速排序
// function quickSort(arr){
//     let left = [];
//     let right = [];
//     if(arr.length==0||arr.length==1){
//         return arr;
//     }
//     let middle = arr.splice(Math.floor(arr.length/2),1);
//
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]<middle){
//             left.push(arr[i]);
//         }else{
//             right.push(arr[i]);
//         }
//     }
//
//     return quickSort(left).concat(middle).concat(quickSort(right));
// }
// var arr = [2,1,5,8,3,5,8,9,0];
// console.log(quickSort(arr));


var perNum = 5;
var perHab = '1 2 3 3 5'.split(' ');
var size = '3';
var hash = {};
for(let i=0;i<perNum;i++){
    hash[i] = perHab[i];
}
var arr = [
    '1 2 1',
    '2 4 5',
    '3 5 3'
]
for(let i=0;i<size;i++){
    var count = 0;
    var line = arr[i].split(' ');

    var start = line[0]-1;
    var end = line[1];
    for(let s=start;s<end;s++){
        if(hash[s]==line[2]){
            count++;
        }
    }
    console.log(count);
}

var perNum = readline();
var perHab = readline().split(' ');
var size = readline();
var hash = {};
for(let i=0;i<perNum;i++){
    hash[i] = perHab[i];
}

for(let i=0;i<size;i++){
    var count = 0;
    var line = readline().split(' ');
    var start = line[0]-1;
    var end = line[1];
    for(let s=start;s<end;s++){
        if(hash[s]==line[2]){
            count++;
        }
    }
    console.log(count);
}

