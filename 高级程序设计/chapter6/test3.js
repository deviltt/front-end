function foo() {
    console.log(this.a);
}

a=2;
var o={
    a:3,
    foo:foo
};
var p={a:4};

o.foo();
(p.foo=o.foo)();
