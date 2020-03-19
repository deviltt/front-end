function object(o) {
    function F() {

    }

    F.prototype=o;
    return new F();
}

function createAnother(original) {
    var clone=object(original);

    clone.sayHi=function () {
        console.log("Hi");
        console.log("Hi")
    };

    return clone;
}

var person={
    name:"Nicholas",
    friends:["Shelby", "Court", "Van"]
};

var another=  createAnother(person);

console.log(another.name);
console.log(another.sayHi);
console.log(another.sayHi());
console.log(another.friends);
