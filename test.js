
// var lines = '5 2'.split(' ');
// var n = lines[0];
// var k = lines[1];
// var size = 0;
//
// for(var i=0;i<=n;i++){
//     for(var j=0;j<=n;j++){
//         if(i%j>=k){
//             size++;
//         }
//     }
// }
//
//
// console.log(size)
// var lines = '11 200'.split(' ');
// var min = lines[0];
// var max = lines[1];
// var result = 0;
// var newArr = [];
// var str = '';
// for(var i=1;i<=max;i++){
//     str = str+i;
//     if(i>=min&&(str%3===0)){
//         result++;
//         newArr.push(str);
//     }
// }
// console.log(newArr);
// console.log(result);

// var num = [];
//
// var result = [];

// 将零到一百的数存储起来random
//
// for(var i=0;i<100;i++){
//
//     num.push(i);
//
// }
//
// // 获取是十个个随机数
//
// for(var i=0;i<10;i++){
//
// // 找到一个数组可选的位置
//
//     var randomIndex = getRandNumber(i);
//
// // 将数子存储起来并，并删除已经选中的数字
//
//     result.push(num[randomIndex]);
//
//     num.splice(randomIndex,1);
// }
//
//
//
// console.log(result.sort((a,b)=>a-b));
//
// function getRandNumber(size){
//
// // 目前可以在数组中选择的区域0~100-size之间
//
//     return Math.floor(Math.random()*(100-size));
//
// }




/*请完成下面这个函数，实现题目要求的功能
当然，你也可以不按照下面这个模板来作答，完全按照自己的想法来 ^-^
******************************开始写代码******************************/
// function test(str) {
//     var reg = /[^0-9a-z]/gi;
//     var regNum = /[0-9]/g;
//     var regLitter = /[a-zA-Z]/gi;
//     var num = [];
//     var litter = [];
//     var newStr = str.replace(reg,'').split('');
//     for(var i=0;i<newStr.length;i++){
//         if(regLitter.test(newStr[i])){
//             litter.push(newStr[i]);
//         }
//         if(regNum.test(newStr[i])){
//             num.push(newStr[i]);
//         }
//     }
//     num = [...new Set(num)];
//     return (num.concat(litter)).join('');
//
// }
// /******************************结束写代码******************************/
//
//
// var res;
//
//
// var _ = '携程Cabbbbaa2t0r1i8p2020校招';
//
//
// res = test(_);
// console.log(res);

// let str = 'cabbbbbb';
//
// var regLitter = /[a-z]/gi;
//定义要拆分的字符串
// ​let str = 'ababccdeff';
// ​// 统计字符出现次数的对象
// ​const countObj = {};
// ​// 将字符拆分成数组
// ​let strArr = str.split('');
// ​
// ​console.log(findLitter(strArr));
// ​// 查找首次出现为2的字符
// ​function findLitter(strArr){
//     for(let i in strArr){
//         // 首次出现次数为2的返回；
//         if(countObj[i]===2){
//             return i;
//         }
//         // 已经出现并且不为而自增
//         if(countObj[i]!=undefined&&countObj[i]!=2){
//             countObj[i]++;
//         }
//         // 未曾出现
//         if(countObj[i]===undefined){
//             countObj[i] = 1;
//         }
//
//     }​
// ​}
//
// var code = "l,m,t,h,.,f,d,s,a,j,k,l,f,d,a,8,9,3,2,1,l,k,k,j,s,a,/,t,e,n,.,o,u,l,e,t,i,a,n,/,/,:,p,t,t,h";
//
// function changCode(str){
//     var newStr = str.split(',').reverse().join('');
//     console.log(newStr);
// }
//
// changCode(code);
// var start = new Date();
// setTimeout(function(){
//     var end = new Date();
//     console.log(end - start);
// }, 2000);

function PrintMinNumber(numbers)
{
    function sortNum(num1,num2){
        console.log((num1+num2)>(num2+num1))
        if((num1+num2)>(num2+num1)){
            return true;
        }else{
            return false;
        }
    }

    for(var i=0;i<numbers.length;i++){
        if(!sortNum(numbers[i],numbers[i+1])){
            var temp = numbers[i+1];
            numbers[i+1] = numbers[i];
            numbers[i] = temp;
        }
    }
    return numbers.join('');

}

console.log(PrintMinNumber([3,32,321]))

