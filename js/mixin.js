function mixin(sourceObj, targetObj) {
    for (var key in sourceObj){
        if (!(key in targetObj)){
            targetObj[key]=sourceObj[key];
        }
    }
    return targetObj;
}

var Vehicle={
    engine:1,
    ignition:function () {
        console.log("Turning on my engine");
    },
    drive:function () {
        this.ignition();
        console.log("Steering and moving forward!")
    }
};

var Car=mixin(Vehicle, {
    wheels:4,
    // ignition:function () {
    //     console.log("Turning on car engine");
    // },
    drive:function () {
        Vehicle.drive.call(this);   //绑定到car上，但是car作用域里面没有ignition方法，因此会使用复制过来的ignition方法
        console.log("Rolling on all "+this.wheels+" wheels!");
    }
});

Car.drive();