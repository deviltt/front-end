function Person(name, age, job) {
    this.name=name;
    this.age=age;
    this.job=job;
    this.sayName=function () {
        console.log(this.name);
    }
}

//当做构造函数使用
var person=new Person("Nicholas", 29, "Software Engineer");
person.sayName();

//当做普通函数使用，属性和方法添加给了window对象
// Person("Greg", 28, "Doctor");
// window.sayName();

//在另一个对象的作用域中调用
var o=new Object();
//var o={}; //现在都用这种方式
Person.call(o, "Kristen", 25, "Nurse");
o.sayName();