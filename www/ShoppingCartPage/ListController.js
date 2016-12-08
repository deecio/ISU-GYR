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
            icon: '../img/SC/LED Bulb.png',
            name: 'LED Bulb',
            monthly_cost: 0.77,
            object: 'lighting'
        },

        $scope.FluorLamp = {
            icon: '../img/SC/CFL Bulb.png',
            name: 'CFL Bulb',
            monthly_cost: 1.54,
            object: 'lighting'
        },

        $scope.IncanLamp = {
            icon: '../img/SC/Incandecesant Bulb.png',
            name: 'Incandescent Bulb',
            monthly_cost: 6.60,
            object: 'lighting'
        },

        {
            icon: '../img/SC/Mini Fridge Black.png',
            name: 'Mini-Fridge (no freezer)',
            monthly_cost: 66,
            object: 'refrigerator'
        },

        {
            icon: '../img/SC/Mini Fridge Silver.png',
            name: 'Micro-Fridge',
            monthly_cost: 77,
            type: 'refrigerator'
        },

        {
            icon: '../img/SC/Microwave Black.png',
            name: 'Microwave',
            monthly_cost: 165,
            object: 'microwave'
        },

        {
            icon: '../img/SC/Toaster.png',
            name: 'Toaster',
            monthly_cost: 115.50,
            object: 'microwave'
        },

        {
            icon: '../img/SC/ToasterOven.png',
            name: 'Toaster Oven',
            monthly_cost: 132,
            object: 'microwave'
        },

        {
            icon: '../img/SC/Coffee Pot Black.png',
            name: 'Traditional (Drip) Coffee Maker',
            monthly_cost: 132,
            object: 'coffee'
        },

        {
            icon: '../img/SC/Keurig Black.png',
            name: 'Keurig Coffee Maker',
            monthly_cost: 165,
            object: 'coffee'
        },

        {
            icon: '../img/SC/Wii.png',
            name: 'Nintendo Wii',
            monthly_cost: 2.09,
            object: 'gaming'
        },

        {
            icon: '../img/SC/XBOX.png',
            name: 'Microsoft Xbox 360',
            monthly_cost: 18.70,
            object: 'gaming'
        },

        {
            icon: '../img/SC/PS3.png',
            name: 'Sony Playstation 3',
            monthly_cost: 21.67,
            object: 'gaming'
        },

        {
            icon: '../img/SC/MagicBullet.png',
            name: 'Magic Bullet',
            monthly_cost: 27.50,
            object: 'blender'
        },

        {
            icon: '../img/SC/Blender.png',
            name: 'Traditional Blender',
            monthly_cost: 55,
            object: 'blender'
        },

        {
            icon: '../img/SC/NutriBullet.png',
            name: 'NutriBullet',
            monthly_cost: 66,
            object: 'blender'
        },

        {
            icon: '../img/SC/TV Flat Screen Black.png',
            name: 'LCD Flatscreen TV',
            monthly_cost: 30.25,
            object: 'tv'
        },

        {
            icon: '../img/SC/TV Plasma.png',
            name: 'Plasma Flatscreen TV',
            monthly_cost: 43.89,
            object: 'tv'
        },

        {
            icon: '../img/SC/PrinterJet.png',
            name: 'Inkjet Printer',
            monthly_cost: 19.80,
            object: 'printer'
        },

        {
            icon: '../img/SC/PrinterLaser.jpg',
            name: 'Laser Printer',
            monthly_cost: 88,
            object: 'printer'
        },

        {
            icon: '../img/SC/PC.png',
            name: 'Desktop Computer',
            monthly_cost: 8.25,
            object: 'computer'
        },

        {
            icon: '../img/SC/Laptop.png',
            name: 'Laptop Computer',
            monthly_cost: 2.75,
            object: 'computer'
        }
    ];
    $scope.filters = [
        { name: 'All', filterExpr: '', icon: '../img/world.png' },
        { name: 'Lighting', filterExpr: { object: 'lighting' }, icon: '../img/SC/CFL Bulb.png' },
        { name: 'Refrigerators', filterExpr: { object: 'refrigerator' }, icon: '../img/SC/Mini Fridge Silver.png' },
        { name: 'Toasters', filterExpr: { object: 'microwave' }, icon: '../img/SC/Microwave Black.png' },
        { name: 'Coffee Makers', filterExpr: { object: 'coffee' }, icon: '../img/SC/Coffee Pot Black.png' },
        { name: 'Gaming Consoles', filterExpr: { object: 'gaming' }, icon: '../img/SC/XBOX.png' },
        { name: 'Blenders', filterExpr: { object: 'blender' }, icon: '../img/SC/Blender.png' },
        { name: 'TVs', filterExpr: { object: 'tv' }, icon: '../img/SC/TV Plasma.png' },
        { name: 'Printers', filterExpr: { object: 'printer' }, icon: '../img/SC/PrinterJet.png' },
        { name: 'Computers', filterExpr: { object: 'computer' }, icon: '../img/SC/PC.png' },
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
        $scope.setFilter('');
        switchShopScreens(".InitItemScreen");
    }
});