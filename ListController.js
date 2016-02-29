app.controller('ListController', ['$scope', function ($scope) {
    $scope.LEDLamp = {
        icon: '',
        name: 'Desk Lamp: LED Bulb',
        price: 6.99
    };

    $scope.HaloLamp = {
        icon: '',
        name: 'Desk Lamp: Halogen Bulb',
        price: 0.99
    };

    $scope.ESMicrowave = {
        icon: '',
        name: 'Microwave: Energy Star Approved',
        price: 199.99
    };
}]);