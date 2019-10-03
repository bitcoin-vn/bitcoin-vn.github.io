var myApp = angular.module('myApp', []);
myApp.controller('myController', function ($scope, $location) {

    //TODO URL curent
    var absUrl = $location.absUrl();
    $scope.absUrl = absUrl;

    //TODO Create QR-Code address wallet
    var qrcode = new QRCode("qr-code-url", {
        width: 170,
        height: 170
    });
    qrcode.makeCode(absUrl);

    $scope.btcAddress = qrcode.btcAddress();
});