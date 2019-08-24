var myApp = angular.module('myApp', []);
myApp.controller('myController', function ($scope, $location) {
    $scope.wigets = [{
        "id": 0,
        "name": "BTC/USD"
    }, {
        "id": 1,
        "name": "ETH/USD"
    }, {
        "id": 2,
        "name": "BCH/USD"
    }, {
        "id": 3,
        "name": "ETC/USD"
    }, {
        "id": 4,
        "name": "XLM/USD"
    }, {
        "id": 5,
        "name": "BNB/USD"
    }, {
        "id": 6,
        "name": "VND/USD"
    }];

    $scope.activeWiget = $scope.wigets[0];

    $scope.setActive = function (menuItem) {
        $scope.activeWiget = $scope.wigets[menuItem];
    }

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