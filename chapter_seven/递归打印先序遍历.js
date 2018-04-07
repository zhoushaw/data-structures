
var result = [];
function preOrderRecur(head){
    if(!head){
        return;
    }
    result.push(head.value);
    preOrderRecur(head.left);
    preOrderRecur(head.right);
}

var obj = {
    value:'1',
    left:{
        value: 2,
        left: {
            value: 3,
            left: {
                value: 6
            },
            right: {
                value: 9
            }

        },
        right: {
            value: 5
        }
    },
    right: {
        value: 7
    }
}
preOrderRecur(obj)
console.log(result);