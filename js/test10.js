function object(o) {
    function F() {

    }
    F.prototype=o;
    return new F();
}

var person={
    name:"Nicholas",
    friends:["Shelby", "Court", "Van"]
};

// var anotherPerson=object(person);
// anotherPerson.name="Greg";
// anotherPerson.friends.push("Rob");

// var yetAnotherPerson=object(person);
// yetAnotherPerson.name="Linda";
// yetAnotherPerson.friends.push("Barbie");

var anotherPerson1=Object.create(person, {
    name:{
        value:"Greg"
    }
});

// console.log(anotherPerson.name);
// console.log(anotherPerson.friends);
// console.log(person.friends);
console.log(person.name);
