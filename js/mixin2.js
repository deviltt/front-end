function Vehicle() {
    this.engines=1;
}
Vehicle.prototype.ignition=function () {
    console.log("Turning on my engine");
};
Vehicle.prototype.drive=function () {
    this.ignition();
    console.log("Steering and moving forward!");
};

function Car() {
    var car=new Vehicle();
    car.wheels=4;
    car.ignition=function () {
        console.log("你好");
    };
    var vehicleDrive=car.drive;
    car.drive=function () {
        vehicleDrive.call(this);    //会先调用Vehicle的drive方法，但是把Car对象绑定到this上
        console.log("Rolling on all "+this.wheels+" wheels!");
    };
    return car;
}

var myCar=new Car();
myCar.drive();
