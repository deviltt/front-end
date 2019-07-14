/**
 * _a_好像一定要这种惯例写法，就是代表普通变量a，
 * 但如果不这样写的话会报错
 */
var myObject = {
    get a() {
        return this._a_;
    },
    set a(val) {
        this._a_ = val * 2;
    }
};
myObject.a=2;
console.log(myObject.a);
