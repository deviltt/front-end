var person={};

Object.defineProperty(person, "name",{
    configurable:false,      //是否可以用delete删除
    enumerable:true,
    writable:false,
    value:"tt",
});
delete person.name;
console.log(person.name);
person.name="zz";
console.log(person.name);
person.name="zz1";
console.log(person.name);
