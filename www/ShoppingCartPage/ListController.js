angular.module('ItemListApp', []).controller('ListController', function ($scope) {
    $scope.title = 'Item List Test';
    $scope.diff = 0;
    $scope.initCost = 0;
    $scope.newCost = 0;

    $scope.firstItem = [];
    $scope.secondItem = [];
    $scope.diffSet = [];

    $scope.items = [
        {
            icon: '../img/ledbulb.jpg',
            icon_height: "150px",
            name: 'Desk Lamp: LED Bulb',
            monthly_cost: 10,
            object: 'lighting',
            type: 'lamp',
            eStar: true
        },

        $scope.FluorLamp = {
            icon: '../img/fluorbulb.jpg',
            icon_height: "150px",
            name: 'Desk Lamp: Fluorescent Bulb',
            monthly_cost: 30,
            object: 'lighting',
            type: 'lamp',
            eStar: true
        },

        $scope.IncanLamp = {
            icon: '../img/IncanBulb.png',
            icon_height: '150px',
            name: 'Desk Lamp: Incandescent Bulb',
            monthly_cost: 50,
            object: 'lighting',
            type: 'lamp',
            eStar: false
        },

        $scope.ESMicrowave = {
            icon: '../img/microwave.jpg',
            icon_height: "150px",
            name: 'Microwave: Energy Star Approved',
            monthly_cost: 20,
            object: 'appliance',
            type: 'microwave',
            eStar: true
        },

        $scope.RegularMicrowave = {
            icon: '../img/microwave.jpg',
            icon_height: "150px",
            name: 'Microwave: Standard',
            monthly_cost: 50,
            object: 'appliance',
            type: 'microwave',
            eStar: false
        },

        $scope.Refrigerator = {
            icon: '../img/miniFridge.jpg',
            icon_height: '150px',
            name: 'Refrigerator: Stock, Compact',
            monthly_cost: 40,
            object: 'appliance',
            type: 'refrigerator',
            eStar: false
        },

        $scope.ESRefrigerator = {
            icon: '../img/miniFridge.jpg',
            icon_height: '150px',
            name: 'Refrigerator: EnergyStar, Compact',
            monthly_cost: 25,
            object: 'appliance',
            type: 'refrigerator',
            eStar: true
        },

        $scope.ESBlender = {
            icon: '../img/blender.jpg',
            icon_height: '150px',
            name: 'Blender: EnergyStar Approved',
            monthly_cost: 8,
            object: 'appliance',
            type: 'blender',
            eStar: true
        },

        $scope.ESBlender = {
            icon: '../img/blender.jpg',
            icon_height: '150px',
            name: 'Blender: Standard',
            monthly_cost: 16,
            object: 'appliance',
            type: 'blender',
            eStar: false
        }
    ];
    $scope.filters = [
        { name: 'All', filterExpr: '' },
        { name: 'Lights', filterExpr: { object: 'lighting' } },
        { name: 'Appliances', filterExpr: { object: 'appliance' } },

        // Commenting this part out for now, bring back when screen 3 filters are changed to match the item, not the filter from screen 1.
        //{ name: 'Energy Star Approved', filterExpr: { eStar: true } }
    ];

    $scope.currentFilter = $scope.filters[0];

    $scope.setFilter = function (filter) {
        $scope.selectedFilter = filter;
    }

    $scope.switchShopScreens = function (screenClass) {
        $(".shop-screen").hide();

        $(screenClass).fadeIn();
    };

    $scope.setFirstCost = function (value, item) {
        $scope.initCost = value;
        $scope.FI = item;
        switchShopScreens(".SecondItemCategory");
    }

    $scope.setSecondCost = function (value, item) {
        $scope.firstItem.push($scope.FI);
        $scope.secondItem.push(item);
        $scope.newCost = value;
        $scope.diff += $scope.initCost - $scope.newCost;
        $scope.diffSet.push($scope.initCost - $scope.newCost);
        switchShopScreens(".StartShopScreen");
    }
});