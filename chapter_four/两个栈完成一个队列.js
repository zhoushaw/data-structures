var inStack  = [];
var outStack  = [];
function push(node)
{
    inStack.push(node);
}
function pop()
{
    if(outStack.length==0){
        while(inStack.length!==0){
            outStack.push(inStack.pop());
        }
    }
    return outStack.pop();

}

push('1');
push('2');
console.log(pop())