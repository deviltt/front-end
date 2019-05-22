function Person(name, age, job) {
    this.name=name;
    this.age=age;
    this.job=job;
    this.friends=["Shelby", "Court"];
}

Person.prototype={
    constructor:Person,
    sayName:function () {
        console.log(this.name);
    }
};

var person1=new Person("Nicholas", 24, "Doctor");
person1.sayName();