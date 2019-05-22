function SuperType() {
    this.property=true;
}
SuperType.prototype.getSuperValue=function () {
    return this.property;
};

function SubType() {
    this.subproperty=false;
}

SubType.prototype=new SuperType();  //这里使用SuperType的实例替换掉了SubType的原型

SubType.prototype.getSubValue=function () {
    return this.subproperty;
};

/**
 * 重写getSuperValue方法
 * @returns {boolean}
 */
SubType.prototype.getSuperValue=function () {
    return false;
};

var instance=new SubType();
console.log(instance.getSuperValue());
console.log(instance.subproperty);
