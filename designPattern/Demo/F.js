function fn1() {
    console.log(1);
}

function fn2() {
    console.log(2)
}

fn1.call.call(fn2);

var book = {
    name: 'java',
    books: ['java', 'html', 'css']
};

console.log(book.__proto__);            //返回的是Object的原型对象

console.log(book.__proto__.constructor);

var obj = new Object({
    name: 'css'
});
console.log(obj.__proto__);

console.log(obj.__proto__.constructor === book.__proto__.constructor);

console.log(Function.prototype.__proto__);

console.log(book.__proto__.constructor.__proto__.constructor);
