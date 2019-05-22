function Person() {

}
Person.prototype.name="Nicholas";
Person.prototype.age=18;
Person.prototype.job="Doctor";
Person.prototype.sayName=function () {
    console.log(this.name);
};

var person1=new Person();
person1.sayName();

var person2=new Person();
person2.sayName();

console.log(person2.sayName == person1.sayName);

console.log(Person.prototype.isPrototypeOf(person1));   //person1的内部属性__prototype__指向Person.prototype

console.log(Object.getPrototypeOf(person1)==Person.prototype);

person1.name="Greg";
console.log(person1.name);

delete person1.name;
console.log(person1.name);

console.log(person1.hasOwnProperty("name"));    //只有实例中有这个属性才返回true

console.log("name" in person1); //不论实例还是原型对象中，只要有这个属性就会返回true

console.log(Object.keys(Person.prototype)); //显示可枚举的实例属性

console.log(Object.getOwnPropertyNames(Person.prototype));  //无论可否枚举，显示所有实例属性
