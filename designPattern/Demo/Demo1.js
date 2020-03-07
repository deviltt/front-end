function SuperClass(id){
    this.books=['js', 'java', 'jquery'];
    this.id=10;
}
SuperClass.prototype.showBooks=function () {
    console.log(this.books);
};

function SubClass(id) {
    SuperClass.call(this, id);
}

var instance1=new SubClass(11);
instance1.books.push("CSS");
console.log(instance1.books);
console.log(instance1.id);
var instance2=new SubClass(12);
console.log(instance2.books);
console.log(instance2.id);
