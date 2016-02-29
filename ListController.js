angular.module('ItemListApp', []).controller('ListController', function ($scope) {
    $scope.title = 'Item List Test';
    $scope.items = [
        {
            icon: 'img/ledbulb.jpg',
            icon_height: "150px",
            name: 'Desk Lamp: LED Bulb',
            price: 6.99,
            object: 'lighting',
            type: 'lamp'
        },

        $scope.FluorLamp = {
            icon: 'img/fluorbulb.jpg',
            icon_height: "150px",
            name: 'Desk Lamp: Fluorescent Bulb',
            price: 0.99,
            object: 'lighting',
            type: 'lamp'
        },

        $scope.ESMicrowave = {
            icon: 'img/microwave.jpg',
            icon_height: "150px",
            name: 'Microwave: Energy Star Approved',
            price: 199.99,
            object: 'appliance',
            type: 'microwave'
        }
    ];
});