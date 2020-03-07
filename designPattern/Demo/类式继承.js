function SuperClass() {
    this.books = ['java', 'html', 'css'];
    this.age=10;
}

function SubClass() {

}

SubClass.prototype = new SuperClass();

var instance1 = new SubClass();
var instance2 = new SubClass();
instance1.books.push('css3');
instance1.age=11;
console.log(instance1.books);
console.log(instance1.age);
instance2.books.push('jquery');
instance2.age=12;
console.log(instance2.books);
console.log(instance2.age);

console.log(instance2.__proto__.books);
console.log(instance2.__proto__.age);       //证明了引用类型是共用，而值类型是复制
