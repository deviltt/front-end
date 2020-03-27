function createIterator(items) {
    var i = 0;
    return {
        next:function f() {
            var done = i >= items.length;
            var value = !done ? items[i++] : undefined;

            return {
                done,
                value
            }
        }
    }
}

var iterator=createIterator([1,2,3,4]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
