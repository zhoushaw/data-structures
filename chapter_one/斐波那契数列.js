// function Fibonacci(n)
// {
//     // write code here
//     if(n==1||n==2){
//         return 1;
//     }
    
//     return Fibonacci(n-2)+Fibonacci(n-1);
    
// }
// console.log(Fibonacci(36));

var lines = '1234';
var reg = /[^0-9]/g;
var newStr = lines.replace(reg,',').split(",");
var newArr = newStr.sort((a,b)=>a-b);
console.log(newArr[newArr.length-1]);
// var n = readline();





