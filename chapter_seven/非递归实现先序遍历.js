// 首先实现一个栈
class stack{
    constructor(val){
        this.stackIn = val || [];
    }
    push(val){
        return this.stackIn.push(val);
    }
    pop(){
        return this.stackIn.pop();
    }
    top(){
        return this.stackIn[this.stackIn.length-1];
    }
}

var newStack = new stack();

var obj = {
    value: 1,
    left:{
        value: 2,
        left: {
            value: 4
        },
        right: {
            value: 5
        }
    },
    right: {
        value: 3,
        left: {
            value: 6
        },
        right: {
            value: 7
        }
    }
}
var head = obj;
var result = [];
newStack.push(head);
while(head){
    let node = newStack.pop();
    console.log(node.value);
    if(node.right){
        newStack.push(node.right);
    }
    if(node.left){
        newStack.push(node.left);
    }
    head = newStack.top();
}