const LinkedList = require('./linked_list');

class Queue extends LinkedList {
  constructor () {
    super();
  }

  shift () {
    if (!this.head) return null;
    const originalHead = this.head;
    this.head = originalHead.next;
    if (originalHead.next) {
      originalHead.next.prev = null;
    } else {
      this.tail = null;
    }
    return originalHead.value;
  }

}

function queue_test () {
  let a = [87,1,7,98,19,77,55,75]

  const queues = []

  for (var i = 0; i < 10; i++) {
    queues.push(new Queue())
  }

  for (var i = 0; i < 2; i++) {
    for (const n of a) {
      const index = Math.floor(n / Math.pow(10, i) % 10)
      queues[index].push(n)
    }
    const r = []
    for(const q of queues){
      let n = q.shift()
      while(n){
        r.push(n)
        n = q.shift()
      }
    }
    a = r
  }

  console.log(a);

}

queue_test();
