//定义要拆分的字符串
​let str = 'ababccdeff';
​// 统计字符出现次数的对象
​const countObj = {};
​// 将字符拆分成数组
​let strArr = str.split('');
​

​console.log(findLitter(strArr));
​// 查找首次出现为2的字符
​function findLitter(strArr){
    for(let i in strArr){
        // 首次出现次数为2的返回；
        if(countObj[i]===2){
            return i;
        }
        // 已经出现并且不为而自增
        if(countObj[i]!=undefined&&countObj[i]!=2){
            countObj[i]++;
        }
        // 未曾出现
        if(countObj[i]===undefined){
            countObj = 1;
        }

    }​
​}