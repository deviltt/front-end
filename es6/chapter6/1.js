let firstName=Symbol("first name");

let person={};
person[firstName]="tt";

console.log("first name" in person);

console.log(person[firstName]);

console.log(firstName);
