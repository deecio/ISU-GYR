angular.module('ItemListApp', []).controller('ListController', function ($scope) {
    $scope.title = 'Item List Test';
    $scope.items = [
        {
            icon: 'img/ledbulb.jpg',
            icon_height: "150px",
            name: 'Desk Lamp: LED Bulb',
            price: 6.99,
            object: 'lighting',
            type: 'lamp',
            eStar: true
        },

        $scope.FluorLamp = {
            icon: 'img/fluorbulb.jpg',
            icon_height: "150px",
            name: 'Desk Lamp: Fluorescent Bulb',
            price: 0.99,
            object: 'lighting',
            type: 'lamp',
            eStar: true
        },

        $scope.IncanLamp = {
            icon: 'img/IncanBulb.png',
            icon_height: '150px',
            name: 'Desk Lamp: Incandescent Bulb',
            price: 1.99,
            object: 'lighting',
            type: 'lamp',
            eStar: false
        },

        $scope.ESMicrowave = {
            icon: 'img/microwave.jpg',
            icon_height: "150px",
            name: 'Microwave: Energy Star Approved',
            price: 199.99,
            object: 'appliance',
            type: 'microwave',
            eStar: true
        },

        $scope.Refrigerator = {
            icon: 'img/miniFridge.jpg',
            icon_height: '150px',
            name: 'Refrigerator: Stock, Compact',
            price: 149.99,
            object: 'appliance',
            type: 'refrigerator',
            eStar: false
        }
    ];
    $scope.filters = [
        { name: 'all', filterExpr: '' },
        { name: 'lights', filterExpr: { object: 'lighting' } },
        { name: 'appliances', filterExpr: { object: 'appliance' } },
        { name: 'Energy Star Approved', filterExpr: { eStar: true } }
    ];

    $scope.currentFilter = $scope.filters[0];

    $scope.setFilter = function (filter) {
        $scope.selectedFilter = filter;
    }

    $scope.switchShopScreens = function (screenClass) {
        $(".shop-screen").hide();

        $(screenClass).fadeIn();
    };

    $scope.setFirstCost = function (value) {
        console.log("First Price: " + value);
        initCost = value;
        switchShopScreens(".SecondItemCategory");
    }

    $scope.setSecondCost = function (value) {
        newCost = value;
        console.log("Second Price: " + value);
    }

    $scope.test = function (value) {
        console.log(value);
    }
});