// var str = '23qwdqw12343flkwj';
//
// var reg = /\d/g;
// console.log(str.replace(reg,''));

function Dialog(){
    this.title = 'hello world';
}

const ProxyModel = (function (){
    var instance = null;
    return function(){
        if(!instance){
            return new Dialog();
        }
    }
})();

console.log(new ProxyModel());