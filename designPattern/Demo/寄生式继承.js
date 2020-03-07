function F() {

}

function inheritObject(o) {
    if (F.prototype !== o) {
        F.prototype = o;
    }
    return new F();
}

var book={
    name:'js book',
    alikeBook:['css', 'js']
};

function createBook(obj){
    var o=inheritObject(obj);
    o.getName=function () {
        console.log(name);
    };
    return o;
}

var temp=createBook(book);
console.log(temp.name);
