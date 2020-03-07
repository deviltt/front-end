function Book(id, name, price) {
    // var num = 1;  //类的私有属性，只能通过共有方法访问到
    // //私有方法
    // function checkId() {
    //     if (id < 5) {
    //         return false;
    //     }
    // }
    //
    // this.getNum = function () {
    //     if (checkId()) {
    //         console.log("id是大于等于5的数" + ": num = " + num);
    //     } else {
    //         console.log("id是小于5的数" + ": num = " + num);
    //     }
    // };
    //
    // this.getName = function () {
    //
    // };
    // this.getPrice = function () {
    //
    // };
    // this.setName = function () {
    //
    // };
    // this.setPrice = function () {
    //
    // };
    // this.id = id;
    // this.copy = function () {
    //
    // };
    // this.setName(name);
    // this.setPrice(price);
}

//构造函数设置，对象不能够访问到
Book.isChinese = true;
Book.resetTime = function () {
    console.log('new Time')
};

//类的原型对象上设置公有属性
Book.prototype = {
    isJSBook: false,
    display: function () {

    }
};

var book = new Book(6, '桃子',20);

var obj=new Object();

console.log(book.__proto__);
console.log(book.__proto__.constructor);

console.log(obj.__proto__===Book.prototype);
console.log(obj.__proto__.constructor===Book.prototype.constructor);
console.log(obj.__proto__);
console.log(obj.__proto__.__proto__);

// console.log(book.constructor);
//
// console.log(book.isChinese);
// console.log(book.__proto__.constructor.isChinese);
//
// console.log(Book.prototype);
// console.log(Book.prototype===book.__proto__);
// console.log(Book.prototype.constructor===Book);

// book.getNum();
// console.log(book.isChinese);
// console.log(Book.prototype===book.__proto__);
//
// console.log(Book.prototype);
// console.log(Book.prototype.constructor);
//
// console.log(book.__proto__.constructor===Object);
// console.log(Object);
//
// console.log(book.__proto__.__proto__);
//
// console.log(Book);

