angular.module('ItemListApp', []).controller('ListController', function ($scope) {
    $scope.title = 'Item List Test';
    $scope.diff = 0;
    $scope.initCost = 0;
    $scope.newCost = 0;
    $scope.items = [
        {
            icon: 'img/ledbulb.jpg',
            icon_height: "150px",
            name: 'Desk Lamp: LED Bulb',
            monthly_cost: 10,
            object: 'lighting',
            type: 'lamp',
            eStar: true
        },

        $scope.FluorLamp = {
            icon: 'img/fluorbulb.jpg',
            icon_height: "150px",
            name: 'Desk Lamp: Fluorescent Bulb',
            monthly_cost: 30,
            object: 'lighting',
            type: 'lamp',
            eStar: true
        },

        $scope.IncanLamp = {
            icon: 'img/IncanBulb.png',
            icon_height: '150px',
            name: 'Desk Lamp: Incandescent Bulb',
            monthly_cost: 50,
            object: 'lighting',
            type: 'lamp',
            eStar: false
        },

        $scope.ESMicrowave = {
            icon: 'img/microwave.jpg',
            icon_height: "150px",
            name: 'Microwave: Energy Star Approved',
            monthly_cost: 199.99,
            object: 'appliance',
            type: 'microwave',
            eStar: true
        },

        $scope.Refrigerator = {
            icon: 'img/miniFridge.jpg',
            icon_height: '150px',
            name: 'Refrigerator: Stock, Compact',
            monthly_cost: 149.99,
            object: 'appliance',
            type: 'refrigerator',
            eStar: false
        }
    ];
    $scope.filters = [
        { name: 'All', filterExpr: '' },
        { name: 'Lights', filterExpr: { object: 'lighting' } },
        { name: 'Appliances', filterExpr: { object: 'appliance' } },
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
        console.log("First monthly cost: " + value);
        $scope.initCost = value;
        switchShopScreens(".SecondItemCategory");
    }

    $scope.setSecondCost = function (value) {
        $scope.newCost = value;
        console.log("Second monthly cost: " + value);
        $scope.diff = $scope.initCost - $scope.newCost;
        switchShopScreens(".Calculator");
    }
});