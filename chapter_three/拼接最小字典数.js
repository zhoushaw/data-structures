function findMinArr(arr){
    function sortNum(num1,num2) {
        if(num1+''+num2>num2+''+num1){
            return true;
        }else{
            return false;
        }
    }

    arr.sort((a,b)=>{
        return sortNum(a,b);
    })

    return arr.join('');
}


console.log(findMinArr([456,123,234,135]))