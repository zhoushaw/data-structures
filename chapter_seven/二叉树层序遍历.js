// //建一个queue,每次push当前pop出的node的孩子。
// function print(node){
//     var queue = [];
//     queue.push(node);
//     var last = node;
//     var nlast = null;
//     var i =1;
//     while(queue.length>0){
//         let shiftNode = queue.shift();
//         console.log(shiftNode.value,i);
//         if(shiftNode.left){
//             queue.push(shiftNode.left);
//             nlast = shiftNode.left;
//         }
//         if(shiftNode.right){
//             queue.push(shiftNode.right);
//             nlast = shiftNode.right;
//         }
//
//         if(shiftNode == last){
//             i++;
//             last = nlast;
//         }
//     }
// }
function print(node){
    var queue = [];
    var i =1;
    var last = node;
    var nlast = node;
    queue.push(node);
    while(queue.length>0){
        let shiftNode = queue.shift();
        console.log(shiftNode.value,i);

        if(shiftNode.left){
            queue.push(shiftNode.left);
            nlast = shiftNode.left;
        }

        if(shiftNode.right){
            queue.push(shiftNode.right);
            nlast = shiftNode.right;
        }

        if(shiftNode==last){
            i++;
            last = nlast;
        }

    }
}

var obj = {
    value:1,
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
        value: 7,
        left: {
            value: 8
        }
    }
}
print(obj);