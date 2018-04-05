

function isRatation(str1,str2){
    if(str1.length!=str2.length){
        return false;
    }
    var result = false;

    var newStr = str1+str1;

    if(newStr.indexOf(str2)!==-1){
        result = true;
    }

    return result;
}


console.log(isRatation('12345','23451'))