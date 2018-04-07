class Node{
    constructor(val){
        this.val = val || null;
        this.pre = null;
        this.next = null;
    }
}

class linked_list{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    push(val){
        let node = new Node(val);
        if(this.head===null&&this.tail===null){
            this.head = node;
            this.head.next = this.tail;
            this.tail = node;
            this.tail.pre = this.head;
        }else{
            this.tail.next = node;
            node.pre = this.tail;
            this.tail = node;
        }
    }
}


var link = new linked_list();

var arr = [1,2,3,4,5,6];
for(var i=0;i<arr.length;i++){
    link.push(arr[i]);
}

console.log(link);