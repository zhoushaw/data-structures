class Node {
  constructor (value, parent, left, right) {
    this.value = value;
    this.parent = parent;
    this.left = left;
    this.right = right;
  }
}

// BST binary search tree
// 特点：1.每个节点左边的节点比它小
//      2.每个节点右边的节点比它大
//       [7]
//    [5]       [13]
//  [1]     [11]      [15]
//        [10][12]  [14][17]

class BinarySearchTree {
  constructor () {
    this.root = null;
  }

  insert (value) {
    const nodeToInsert = new Node(value, null, null, null);
    if (!this.root) {
      this.root = nodeToInsert;
      return;
    }
    let parent = this.root;
    let inserted = false;
    while (!inserted) {
      if (value < parent.value) {
        if (!parent.left) {
          parent.left = nodeToInsert;
          nodeToInsert.parent = parent;
          inserted = true;
        } else {
          parent = parent.left;
        }
      } else if (value > parent.value) {
        if (!parent.right) {
          parent.right = nodeToInsert;
          nodeToInsert.parent = parent;
          inserted = true;
        } else {
          parent = parent.right;
        }
      } else {
        return;
      }
    }
  }

  static inOrder (node) {
    if (node) {
      BinarySearchTree.inOrder(node.left);
      console.log(node.value);
      BinarySearchTree.inOrder(node.right);
    }
  }

  static preOrder (node) {
    if (node) {
      console.log(node.value);
      BinarySearchTree.inOrder(node.left);
      BinarySearchTree.inOrder(node.right);
    }
  }

  static afterOrder (node) {
    if (node) {
      BinarySearchTree.inOrder(node.left);
      BinarySearchTree.inOrder(node.right);
      console.log(node.value);
    }
  }

  search (value) {
    let parent = this.root;
    if (!parent) return null;
    let node = null;
    while (!node) {
      if (parent === null) return null;
      if (value === parent.value) {
        node = parent;
      } else if (value < parent.value) {
        parent = parent.left;
      } else if (value > parent.value) {
        parent = parent.right;
      }
    }
    return node;
  }

  remove (value) {
    let node = this.search(value);
    //根节点
    if (!node.parent) {
      this.root = null;
      return;
    }
    //没有子节点
    if (!node.left && !node.right) {
      if (node.value < node.parent.value) {
        node.parent.left = null;
        node = null;
      } else if(node.value > node.parent.value) {
        node.parent.right = null;
        node = null;
      }
      //只有一个子节点
      //只有一个左节点
    } else if (node.left && !node.right) {
      if (node.value < node.parent.value) {
        let parent = node.parent;
        let leftChild = node.left;
        parent.left = leftChild;
        leftChild.parent = parent;
        node = null;
      } else if (node.value > node.parent.value) {
        let parent = node.parent;
        let leftChild = node.left;
        parent.right = leftChild;
        leftChild.parent = parent;
        node = null;
      }
      //只有一个右节点
    } else if (!node.left && node.right) {
      if (node.value < node.parent.value) {
        let parent = node.parent;
        let rightChild = node.right;
        parent.left = rightChild;
        rightChild.parent = parent;
        node = null;
      } else if (node.value > node.parent.value) {
        let parent = node.parent;
        let rightChild = node.right;
        parent.right = rightChild;
        rightChild.parent = parent;
        node = null;
      }
    } else if (node.left && node.right) {
      if (node.value < node.parent.value) {
        const leftChild = node.left;
        const rightChild = node.right;
        const parent = node.parent;
        parent.left = rightChild;
        rightChild.parent = parent
        const leftLeaf = BinarySearchTree.findLeftLeaf(rightChild)
        leftLeaf.left = leftChild
        leftChild.parent = leftLeaf
      }else if(node.value > node.parent.value){
        const leftChild = node.left;
        const rightChild = node.right;
        const parent = node.parent;
        parent.right = leftChild;
        leftChild.parent = parent
        const rightLeaf = BinarySearchTree.findRightLeaf(leftChild)
        rightLeaf.right = rightChild
        rightChild.parent = rightChild
      }
    }
  }

  static findLeftLeaf (node) {
    if (!node.left) return node;
    else return BinarySearchTree.findLeftLeaf(node.left);
  }

  static findRightLeaf (node) {
    if (!node.right) return node;
    else return BinarySearchTree.findRightLeaf(node.right);
  }

}

function BSTTest () {

  const BST = new BinarySearchTree();
  BST.insert(7);
  BST.insert(13);
  BST.insert(3);
  BST.insert(1);
  BST.insert(5);
  BST.insert(6);
  BST.insert(15);
  BST.insert(14);
  BST.insert(12);
  BST.insert(11);

  console.log(BST);
  //
  BST.remove(13)

  console.log(BST);

  //
  // console.log('\n');
  //
  // BinarySearchTree.inOrder(BST.root)

}

BSTTest();