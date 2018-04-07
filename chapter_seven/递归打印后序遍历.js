
var result = [];
function posOrderRecur(head){
    if(!head){
        return;
    }
    posOrderRecur(head.left);
    posOrderRecur(head.right);
    result.push(head.value);
}
