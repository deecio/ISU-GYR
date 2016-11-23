﻿var app = angular.module("ItemListApp", []);

$(document).ready(function () {
    // Hide all blocks except for the first
    switchShopScreens(".StartShopScreen");
    $(".categories").hide();

    $('.collection-item').click(function () {
        $(this).parent().siblings('div').children().removeClass('active');
        $(this).addClass('active');
    })
})

// Function to switch screens in shopping cart menu
// screenClass = full class name, including the period (ex: .ReplaceItemScreen)
function switchShopScreens(screenClass){
    $(".shop-screen").hide();

    if (screenClass == ".StartShopScreen") {
        $(screenClass).fadeIn(1600);
    } else {
        $(screenClass).fadeIn(800);
    }
};

function resetActive() {
    $('.collection-item').removeClass('active');
    $('.collection-item').first().addClass('active');
}

function showSidebar() {
    $(".categories").fadeIn();
}