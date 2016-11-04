var app = angular.module("ItemListApp", []);

$(document).ready(function () {
    // Hide all blocks except for the first
    switchShopScreens(".StartShopScreen");
    $(".categories").hide();
})

// Function to switch screens in shopping cart menu
// screenClass = full class name, including the period (ex: .ReplaceItemScreen)
function switchShopScreens(screenClass){
    $(".shop-screen").hide();

    $(screenClass).fadeIn(800);
};

function showSidebar() {
    $(".categories").fadeIn();
}