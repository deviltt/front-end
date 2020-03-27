function* createIterator() {
    let first = yield 1;
    let second;

    try {
        second = yield first + 2;
    } catch (e) {
        console.log(e.toString());
        second = 6;
    }
    yield second + 3;
}

let iterator=createIterator();

console.log(iterator.next());   //1
console.log(iterator.next(4));  //6
console.log(iterator.throw(new Error("boom"))); //9
console.log(iterator.next());
