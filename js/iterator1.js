var randoms={
    [Symbol.iterator]:function () {
        return {
            next:function () {
                return{
                    value:Math.random()
                }
            }
        }
    }
};

var randoms_pool=[];
for (var n of randoms){
    console.log(n);
    randoms_pool.push(n);
    if (randoms_pool.length===50)
        break;
}
