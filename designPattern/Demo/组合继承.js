function SuperClass(name) {
    this.name = name;
    this.books = ['js', 'java', 'css'];
}

SuperClass.prototype.getName = function () {
    console.log(this.name);
};

function SubClass(name, time) {
    SuperClass.call(this, name);
    this.time = time;
}

SubClass.prototype = new SuperClass();
SubClass.prototype.getTime = function () {
    console.log(this.time);
};

console.log(SubClass.prototype.books);
console.log(SubClass.prototype.name);
