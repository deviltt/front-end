let uid=Symbol.for("uid");
console.log(Symbol.keyFor(uid));

//如果有"uid"则直接返回，没有就新创建一个返回
let uid2=Symbol.for("uid");
console.log(Symbol.keyFor(uid2));

let uid3=Symbol("uid");
console.log(Symbol.keyFor(uid3));
