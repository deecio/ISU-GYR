angular.module('FactListApp', []).controller('FactController', function ($scope) {
    $scope.title = 'Trivia List';
    $scope.facts = [
        {
            fact: 'Buying items for a space can be expensive but it doesn’t have to be. When you buy all new items from bedding to a mini fridge, from a futon to a television, you can easily spend thousands of dollars. It can be eas to buy really cheap as well; but remember that quality is important too. In considering your ecoming sustainability buy an item that is well-made and can last a long time. Save money and reduce your environmental footprint.',
            tag: 'greenBuying'
        },

        {
            fact: 'First look for free items. There are often offers of furniture and other items on community swap pages and through community freecycle. Ames Community Swap on Facebook is a local resource for Iowa Staters. Trading with family and friends, especially around the holidays (when people are replacing older items) or during move out when downsizing is happening. It’s a great way to save money and outfit your dorm.',
            tag: 'greenBuying'
        },

        {
            fact: 'Next try to buy used. Instead of buying something that uses brand new resources, you can buy something that just needs a fresh coat of paint to look good as new. Often times items are delivered to second hand shops because a newer looking product is available - vintage is in, however and vintage products can be fun, more durable, and definitely unique!',
            tag: 'greenBuying'
        },

        {
            fact: 'As much as you can, try to buy local! Remember that when you spend money in the community your dollar stays in the community supporting local businesses.',
            tag: 'greenBuying'
        },

        {
            fact: 'Swapping free items and buying used also makes a huge impact in reduced packaging. Almost 76 million tons of packaging is thrown away every year making a total of almost 50% of the total waste was thrown away! Looking for opportunities from the purchase of new products to reduce your waste print and cut down on packaging by purchasing products without all of the extra packaging is so significant.',
            tag: 'greenBuying'
        },

        {
            fact: 'Everyone likes a clean space and now your parents aren’t around to keep things picked up and clean. Be green when you clean by purchasing green cleaning supplies. You can even make your own green cleaning supplies by using vinegar and baking soda - you can also save up to $100 a year by making your own cleaning supplies over buying!',
            tag: 'cleanSupplies'
        },

        {
            fact: 'Instead of using a store-bought air-freshener, try using plants instead. Not only will they make your dorm smell nier, but they can also filter the air as well.',
            tag: 'cleanSupplies'
        },

        {
            fact: 'Keep your room green by adding a recycling bin! Each residential housing area has recycling or you can recycle on campus in designated buildings and at the single stream recycling solar compactors.',
            tag: 'recycling'
        },

        {
            fact: 'When you’re getting a lamp to brighten your space, purchase one that can use an energy efficient compact fluorescent light bulbs (CFLs) or light-emitting diode (LEDs) lighting. If you live off-campus you are eligible for rebates on energy efficient lighting. If you live in Freddy court, you can trade-in your inefficient light bulbs for CFLs. Though costing a little more, they can save over five times their purchase price in reduced electricity usage and last so much longer than traditional light bulbs.',
            tag: 'lighting'
        },
    ];
    $scope.filters = [
        { name: 'Lighting', filterExpr: { tag: 'lighting' } },
        { name: 'Recycling', filterExpr: { tag: 'recycling' } },
        { name: 'Green Supplies', filterExpr: { tag: 'cleanSupplies' } },
        { name: 'Green Buying', filterExpr: { tag: 'greenBuying' } }
    ];

    $scope.selectedFilter = $scope.filters[0];

    $scope.setFilter = function (filter) {
        $scope.selectedFilter = filter;
    }
});