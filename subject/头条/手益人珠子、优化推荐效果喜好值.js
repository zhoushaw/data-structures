/*
* 为了不断优化推荐效果，今日头条每天要存储和处理海量数据。假设有这样一种场景：我们对用户按照它们的注册时间先后来标号，对于一类文章，每个用户都有不同的喜好值，我们会想知道某一段时间内注册的用户（标号相连的一批用户）中，有多少用户对这类文章喜好值为k。因为一些特殊的原因，不会出现一个查询的用户区间完全覆盖另一个查询的用户区间(不存在L1<=L2<=R2<=R1)。


* */

// 引入 readline , 用于逐行读取
const readline = require('readline');

// 创建输入输出接口, 线上环境复制上去之后要
// 把【 input: myStdin, 】这句删掉
// 把【//input: process.stdin,】这句前面的双斜杠删掉
// 即线上环境用 process.stdin 作为标准输入
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 由于此类型题目需要通过从输入的内容中获取每次读取的行数, 因此需要读多少行是个不确定的数
// 这里的 0 表示还没开始读
let lineCount = 0;
let userNums,groups;
let likesMap=new Map();


// 监听控制台的输入, 当检测到回车时触发, function 传入的 line 是读入的一行
rl.on('line', function (line) {
    if (0 === lineCount) {
        //读取第一行, 得到接下来输入的行数
        userNums = parseInt(line);
        lineCount++;
    }else if(lineCount === 1){
        let likesArray=line.split(' ');
        for(let i=0;i<likesArray.length;i++){
            let likeKey=parseInt(likesArray[i]);
            if(!likesMap.has(likeKey)){
                let userArray=[];
                userArray.push(i+1);
                likesMap.set(likeKey,userArray);
            }else {
                likesMap.get(likeKey).push(i+1);
            }
        }
        lineCount++;
    }else if(lineCount===2){
        groups=parseInt(line);
        lineCount++;
    }else {
        let searchArray = line.split(' ');
        let l = parseInt(searchArray[0]);
        let r = parseInt(searchArray[1])
        let k = parseInt(searchArray[2]);
        let count = 0;
        let temp=likesMap.get(k);
        if (temp === undefined) {
            console.log(count);
        } else {
            for (let j = 0; j < temp.length; j++) {
                if (temp[j] > r) {
                    break;
                }
                if (temp[j] >= l) {
                    count++;
                }
            }
            console.log(count);
        }
        groups--;
        if(groups===0){
            lineCount=0;
        }
    }
});

/*
* 作为一个手串艺人，有金主向你订购了一条包含n个杂色串珠的手串——每个串珠要么无色，要么涂了若干种颜色。为了使手串的色彩看起来不那么单调，金主要求，手串上的任意一种颜色（不包含无色），在任意连续的m个串珠里至多出现一次（注意这里手串是一个环形）。手串上的颜色一共有c种。现在按顺时针序告诉你n个串珠的手串上，每个串珠用所包含的颜色分别有哪些。请你判断该手串上有多少种颜色不符合要求。即询问有多少种颜色在任意连续m个串珠中出现了至少两次。
* */

var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
let lineCount = 0;
let n = 0, m = 0, c = 0, unlegalCount = 0;
//颜色珠子的分布，位于哪些珠子上（位置）
let colorball = new Map();
rl.on('line', function (line) {
    var lineArray = line.trim().split(' ');
    //输入的是第一行
    if (0 == lineCount) {
        n = parseInt(lineArray[0]);
        m = parseInt(lineArray[1]);
        c = parseInt(lineArray[2]);
        lineCount++;
    }
    //录入每颗珠子的颜色所在位置，位置是从1开始
    else if(n >=lineCount) {
        let i = 0;
        while (i++ < lineArray[0]) {
            if (colorball.has(lineArray[i])) {
                colorball.get(lineArray[i]).push(lineCount);//把第几颗珠子位置压入
            } else { colorball.set(lineArray[i], [lineCount]);
            }
        }
        lineCount++;
    }
    //录入结束
    if(lineCount>n){
        //判断有几个珠子的颜色不合格
        for (onecolor of colorball.values()) {
            for (let [index, v] of onecolor.entries()) {
                if (index == onecolor.length - 1) {//最后一颗
                    if (n - v + onecolor[0] < m) { unlegalCount++; break; }
                    continue;
                }
                if (onecolor[index + 1] - v < m) { unlegalCount++; break; }
            }
        }
        console.log(unlegalCount);

    }
})