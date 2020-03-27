let firstName = Symbol("firstName");
let person = {
    [firstName]:"tt"
};

Object.defineProperty(person, firstName,{
    writable:false
});

person[firstName]="zz";

let lastName=Symbol("lastName");

Object.defineProperty(person,lastName,{
    value:"ff",
    writable:false
});

console.log(person[firstName]);
console.log(person[lastName]);
