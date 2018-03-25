const LinkedList = require('./linked_list');

class Stack {
  constructor () {
    return new LinkedList();
  }
}

function stackTest () {
  const str = '{{{{{{{}}}}}'
  const stack = new Stack()
  for (var i = 0; i < str.length; i++) {
    const c = str[i]
    if(c === '{') stack.push(i)
    if(c === '}') stack.pop()
  }
  console.log(stack.toString())

}

stackTest()

