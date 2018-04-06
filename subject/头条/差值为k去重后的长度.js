
var size = '5 2'.split(' ');
var lines = '1 5 3 4 2'.split(' ').sort((a,b)=>a-b);

var val = size[1];
var i=0;
var j=0;
var result = 0;

while(i<lines.length&&j<lines.length){

    // 差值小时增加j
    if(lines[j]-lines[i]<val){
        j++;
    }

    // 差值大时增加i
    if(lines[j]-lines[i]>val){
        i++;
    }
    if(lines[j]-lines[i]==val){
        result++;

        // 遇到重复的数字直接跳过
        var big = lines[j];
        var small = lines[i];
        console.log(big,small);
        while(i<lines.length&&j<lines.length&&(big == lines[j]||small==lines[i])){
            if(big==lines[j]){
                j++;
            }
            console.log(j,i);
            if(small==lines[i]){
                i++;
            }
        }
    }
}


console.log(result);