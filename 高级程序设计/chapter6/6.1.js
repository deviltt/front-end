var person={
    name:"tt",
    age:29,
    job:"soft",
    sayName:function () {
        console.log(this.name);
    }
};

person.sayName();

var obj={
    name:"lyh"
};

person.sayName.call(obj);
