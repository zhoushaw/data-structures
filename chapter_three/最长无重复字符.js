function lengthOfLongestSubstring(s) {
    var map = {};
    // 每个字符的初始位置都为-1
    for (var i=0; i<s.length; i++)
        map[s[i]] = -1;//初始化哈希表

    var pre = -1, Max = 0;

    for (var i=0; i<s.length; i++){
        pre = Math.max(pre, map[s[i]]);
        console.log(pre,map[s[i]]);
        Max = Math.max(Max, i-pre);
        console.log(s[i],i);
        map[s[i]] = i;
    }
    console.log(map);
    return Max;

}


console.log(lengthOfLongestSubstring('abcade'));
//
// function findMaxLengthStr(str){
//     var map = {};
//     // 初始化hasMap的值
//     for(var i=0;i<str.length;i++){
//         map[str[i]] = -1;
//     }
//     var Max = 0;
//     var pre = -1;
//
//     for(var i=0;i<str.length;i++){
//         pre = Math.max(pre, map[str[i]]);
//         Max = Math.max(Max,i-pre);
//         map[str[i]] = i;
//     }
//
//     return Max;
//
// }
// var str = 'abcade';
// console.log(findMaxLengthStr(str));