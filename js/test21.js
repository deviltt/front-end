function MyObject() {
    var privateVariable=10;
    function privateFunction() {
        return false;
    }
    this.publicMethod=function () {
        privateVariable++;
        return privateFunction();
    };
    this.publicMethod1=function () {
        return privateVariable;
    }
}

var myObject=new MyObject();
console.log(myObject.publicMethod());

console.log(myObject.publicMethod1());