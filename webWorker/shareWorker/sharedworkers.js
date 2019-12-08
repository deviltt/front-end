// var a = 1;
//
// onconnect = function (e) {
//     var port = e.ports[0];
//
//     port.onmessage = function () {
//         console.log("tt");
//         port.postMessage(a++)
//     }
// };

var a = null;
onconnect = function (e) {
    if (a === null) {
        var port = e.ports[0];

        port.onmessage = function () {
            port.postMessage(a = a + 1)
        }
    } else {
        port = e.ports[0];

        port.onmessage = function () {
            port.postMessage(a = a + 2)
        }
    }

};
