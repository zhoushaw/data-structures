const LinkedList = require('./linked_list')

class HashTable {
  constructor () {
    this.arr = new Array(10)
    for (var i = 0; i < 10; i++) {
      this.arr[i] = new LinkedList()
    }
  }

  set(n) {
    const hashCode = this.hashCode(n)
    const linkedList = this.arr[hashCode]
    linkedList.push(n)
  }

  get(n){
    const hashCode = this.hashCode(n)
    const linkedList = this.arr[hashCode]
    let head = linkedList.head
    if(!head) return null
    while(head.value !== n){
      head = head.next
    }
    return head.value
  }

  hashCode(n) {
    return n % 10
  }

  toString() {
    let str = ''
    for (let i = 0; i < this.arr.length; i++) {
      const linkedList = this.arr[i]
      str += ' '
      str += linkedList.toString()
      str += ' '
    }
    return str
  }

}

function hashTableTest(){
  const hashTable = new HashTable()

  hashTable.set(1)
  hashTable.set(2)
  hashTable.set(3)
  hashTable.set(33)
  hashTable.set(68)
  hashTable.set(98)

  console.log(hashTable.toString());

}

hashTableTest()
