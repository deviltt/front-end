function SuperType(name) {
    this.name=name;
    this.colors=["red", "blue", "green"];
}

SuperType.prototype.sayName=function () {
    console.log(this.name);
    console.log(this);  //SuperType { name: undefined, colors: [ 'red', 'blue', 'green' ] }
};

function SubType(age, name) {
    SuperType.call(this, name);
    this.age=age;
}

var instance=new SubType(25);
console.log(instance.age);
console.log(instance.name);

// var instance=new SuperType();
// instance.sayName();