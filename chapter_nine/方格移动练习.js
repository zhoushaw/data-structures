function countNum(x,y){

    return C(x+y,y);


    function C(n,m){

        return N(n)/(N(m)*N(n-m));
    }

    function N(n){
        if(n<0){
            return -1;
        }
        if(n==0){
            return 1;
        }

        var res = 1;

        for(var i=1;i<=n;i++){
            res *= i;
        }
        return res;
    }
}

console.log(countNum(5,8))