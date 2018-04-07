var obj = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3
        }
    }
}

function reverseLink(pHead){
    var pre = null;
    // 将其复制给now,这样修改now时，只是修改引用不会修改到pHead
    var now = pHead;
    while(now){
        // 将next存储下来，因为要修改now的next为前一个
        var next = now.next;
        now.next = pre;
        // 用pre将当前node存储下来，方便下一个改更改指针
        pre = now;
        // 将now更改为next，对余下节点进行修改
        now = next;
    }
    return pre;
}