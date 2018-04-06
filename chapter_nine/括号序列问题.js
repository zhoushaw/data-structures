/*
    假设有n对左右括号，请求出合法的排列有多少个？合法是指每一个括号都可以找到与之配对的括号，比如n=1时，()是合法的，但是)(为不合法。

    给定一个整数n，请返回所求的合法排列数。保证结果在int范围内。

    测试样例：
    1
    返回：1

    卡特兰数
 */



function coutNum(n){

    return 1/(n+1)*(N(2*n)/(N(n)*N(2*n-n)));

    function N(n){
        if(n==0){
            return 1;
        }
        if(n<0){
            return -1;
        }

        var res = 1;
        for(var i=1;i<=n;i++){
            res *=i;
        }
        return res;
    }
}

console.log(coutNum(2));