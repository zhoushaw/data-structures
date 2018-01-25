class Node {
  constructor (value, next, prev) {
    this.value = value;
    this.next = next || null;
    this.prev = prev || null;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  insert (value, after) {
    const nodeToInsert = new Node(value);
    if (!this.head) {
      this.head = nodeToInsert;
      this.tail = nodeToInsert;
      return;
    }
    const node = this._findNode(after);
    if (!node) return;
    const originalNext = node.next;
    node.next = nodeToInsert;
    nodeToInsert.prev = node;
    if (originalNext) {
      nodeToInsert.next = originalNext;
      originalNext.prev = nodeToInsert;
    }
    else this.tail = nodeToInsert;
  }

  _findNode (value) {
    if (!this.head) return null;
    if (this.head.value === value) return this.head;
    let cur = this.head;
    while (cur.next) {
      cur = cur.next;
      if (cur.value === value) return cur;
    }
    return null;
  }

  push (value) {
    const nodeToInsert = new Node(value, null);
    if (!this.tail) {
      this.head = nodeToInsert;
      this.tail = nodeToInsert;
    } else {
      this.tail.next = nodeToInsert;
      nodeToInsert.prev = this.tail;
      this.tail = nodeToInsert;
    }
  }

  pop () {
    if (!this.tail) return null;
    const originalTail = this.tail;
    this.tail = originalTail.prev;
    if (originalTail.prev) {
      originalTail.prev.next = null;
    }else{
      this.head = null
    }
    return originalTail.value;
  }

  remove (after) {
    const prevNode = this._findNode(after);
    if (!prevNode) return;
    if (prevNode.next) {
      const nextNode = prevNode.next.next;
      if (!nextNode) this.tail = prevNode;
      prevNode.next.next = null;
      prevNode.next = nextNode;
    }
  }

  toString () {
    if (!this.head) return '';
    let cur = this.head;
    let str = cur.value.toString();
    while (cur.next) {
      cur = cur.next;
      str += cur.value.toString();
    }
    return str;
  }

}

//
// function linkedListTests() {
//
//   const arr = new Array(1000000)
//   for (var i = 0; i < 1000000; i++) {
//     arr[i] = i
//   }
//
//
//   console.time('shifting array element');
//
//   for (var i = 0; i < 1000; i++) {
//     arr.shift()
//   }
//
//   console.timeEnd('shifting array element');
//
//
//   console.time('pop array element');
//
//   for (var i = 0; i < 100000; i++) {
//     arr.pop()
//   }
//
//   console.timeEnd('pop array element');
//
//
//   const linkedList = new LinkedList()
//
//   for (var i = 0; i < 1000000; i++) {
//     linkedList.push(i)
//   }
//
//   console.time('shifting a linked list');
//
//   for (var i = 0; i < 100000; i++) {
//     linkedList.remove(0)
//   }
//
//   console.timeEnd('shifting a linked list');
//
// }
//
// linkedListTests()

module.exports = LinkedList;
