
function reverseWorld(str){
    var newArr = str.split(' ');
    return newArr.reverse().join(' ');
}


console.log(reverseWorld('hello world'));


function reverseChart(str){
    var newArr = str.split('');
    return newArr.reverse().join('');
}


console.log(reverseChart('hello world'));