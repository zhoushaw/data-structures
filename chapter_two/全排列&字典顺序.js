var result = [];
function permutation(arr,start){
    if(start==arr.length-1){
        return result.push(arr.join(''));
    }else{
        for(var i=start;i<arr.length;i++){
            swape(arr,start,i);
            permutation(arr,start+1);
            swape(arr,start,i);
        }
    }
}

function swape(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


var arr = ['1','2','3'];
permutation(arr,0);
console.log([...new Set(result)]);


result.sort((a,b)=>{
    return (a+''+b)>(b+''+a);
})
console.log(result);


var arr = [2,1,5,2,6,3];
arr.sort((a,b)=>{
    return a-b;
})

console.log(arr);