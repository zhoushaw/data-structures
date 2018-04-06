function coutNum(n,m){

    return N(n-1)/(N(m-1)*N(n-m));

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

console.log(coutNum(10,3));