function foo() {
    console.log(this.a);
}

var obj={
    a:2,
    foo:foo
};

// obj.foo();
var bar=obj.foo;

a="tt";

bar();
