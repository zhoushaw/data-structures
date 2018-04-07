

class Solution {
    constructor(){
        this.stackVal = [];
        this.stackMin = [];
    }
    push(val) {
        const stackVal = this.stackVal;
        const stackMin = this.stackMin;
        stackVal.push(val);
        // 当最小栈内没有元素，或传入的元素小于最小栈元素，push进入
        if(stackMin.length==0){
            stackMin.push(val);
        }else if(val<stackMin[stackMin.length-1]){
            stackMin.push(val);
        }else{
            stackMin.push(stackMin[stackMin.length-1]);
        }
    }
    pop() {
        this.stackVal.pop();
        this.stackMin.pop();

    }
    top() {
        return this.stackMin[this.stackMin.length-1];
    }
    min() {
        return this.stackMin[this.stackMin.length-1];
    }
};


var array1 = new Solution();
var arr = [4,1,4,4,3,6,8];
for(var i=0;i<arr.length;i++){
    array1.push(arr[i]);
}

array1.pop();
console.log(array1);
console.log(array1.top());