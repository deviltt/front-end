var foo=(function CoolModule() {
    var something="cool";
    var another=[1,2,3];

    function doSomething() {
        console.log(something);
    }
    function doAnother() {
        console.log(another.join("!"))
    }
    return {
        doSomething,
        doAnother
    }
})();       //单例模式，创建的时候只执行一次

foo.doAnother();
foo.doSomething();
