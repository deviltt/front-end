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

var e1 = inheritObject(book);
var e2 = inheritObject(book);

e1.alikeBook.push('java');
e1.name='java';

console.log(e1.alikeBook);
console.log(book.alikeBook);
console.log(e1.name);
console.log(book.name);
console.log(e1.__proto__.constructor === e2.__proto__.constructor);
