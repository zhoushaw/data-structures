/**
 * 后序遍历递归版本，
 * 按照左节点，根节点，右节点的遍历顺序.当考查节点为空时，从栈中弹出的时候再进行输出(永远先考虑左子树，直到左子树为空才访问根节点)
 */

let tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
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
let result = [];
// 递归版本
function traverseBinaryTreeRecursive(rootTreeNode){
    if (!rootTreeNode) return;
    traverseBinaryTreeRecursive(rootTreeNode.left);
    result.push(rootTreeNode.value);
    traverseBinaryTreeRecursive(rootTreeNode.right);
}
traverseBinaryTreeRecursive(tree);
console.log(result);

/**
 * 非递归版本,伪代码：
 * ①初始化过程：创建空堆栈（binaryTreeStack），创建结果数组（result）
 * ②访问根节点，并将节点值放入数组result，将根节点推入binaryTreeStack栈中
 * ③而是当考查节点为空时，从栈中弹出的时候再进行输出(永远先考虑左子树，直到左子树为空才访问根节点)
 *  */
result = [];
function traverseBinaryTree (rootTreeNode) {
    let binaryTreeStack = [];
    if (!rootTreeNode) return;
    binaryTreeStack.push(rootTreeNode);

    while (binaryTreeStack.length > 0 || rootTreeNode) {
        while (rootTreeNode) {
            binaryTreeStack.push(rootTreeNode);
            rootTreeNode = rootTreeNode.left;
        } 

        if (binaryTreeStack.length > 0) {
            rootTreeNode = binaryTreeStack.pop();
            result.push(rootTreeNode.value);
            rootTreeNode = rootTreeNode.right;
        }
    }
}
traverseBinaryTree(tree);
console.log(result);



