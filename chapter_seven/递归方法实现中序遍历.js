function inOrderRecur(head){
    if(!head){
        return;
    }
    inOrderRecur(head.left);
    console.log(head.value);
    inOrderRecur(head.right);
}


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

inOrderRecur(obj);