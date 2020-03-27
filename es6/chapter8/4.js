let o={
    *createIterator(items){
        for (let i = 0; i <items.length ; i++) {
            yield items[i]
        }
    }
};
let iterator=o.createIterator([1,2,3]);
iterator.next();
console.log(iterator.next());

