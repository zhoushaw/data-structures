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

var arr = [1,2,3,4];
permutation(arr,0);
console.log(result);