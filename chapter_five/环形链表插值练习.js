/*
* 有一个整数val，如何在节点值有序的环形链表中插入一个节点值为val的节点，并且保证这个环形单链表依然有序。

    给定链表的信息，及元素的值A及对应的nxt指向的元素编号同时给定val，请构造出这个环形链表，并插入该值。

    测试样例：
    [1,3,4,5,7],[1,2,3,4,0],2
    返回：{1,2,3,4,5,7}
* */

class Node{
    constructor(val){
        this.val = val || null;
        this.next = null;

    }
}

class linkList{
    constructor(node){
        this.head = node || null;
        this.tail = node || null;
    }
    addLink(val){
        let newNode = new Node(val);
        this.tail.next = newNode;
        this.tail = newNode;

    }
}
var arr = [1,3,4,5,7];
var pHead = new Node();
pHead.val = arr[0];

