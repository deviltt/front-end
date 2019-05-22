var book = {};
//同时定义多个属性
Object.defineProperties(book, {
    _year: {
        writable: true,  //表示可以修改，为什么这边要单独设置一下，因为使用defineProperty设置的属性，Configuration, Writable, Enumerable都默认是false
        value: 2004
    },
    edition: {
        writable: true,
        value: 1
    },
    year: {
        get: function () {
            return this._year;
        },
        set: function (newValue) {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});
book.year=2005;
console.log(book.edition);