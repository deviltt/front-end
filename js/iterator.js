/**
 * 普通对象是不可以使用for...of的形式遍历对象的值的
 * 只有数组才可以
 * 但是可以为普通对象添加@@iterator属性，使其具有for...of的功能
 * @type {{a: number, b: number}}
 */
var myObject={
    a:2,
    b:3
};
Object.defineProperty(
    myObject,
    Symbol.iterator,
    {
        writable:false,
        enumerable:false,
        configurable:true,
        value:function () { //function()是一个隐藏函数，对象调用属性Symbol.iterator时就会返回这个隐藏函数的返回值
            var o=this;
            var index=0;
            var keys=Object.keys(o);
            return{
                next:function () {
                    return {
                        value: o[keys[index++]],
                        done: (index>keys.length)
                    }
                }
            }
        }
    });

var it=myObject[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (var a of myObject){
    console.log(a);
}
