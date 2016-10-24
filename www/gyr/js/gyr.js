$(function () {
            $(".dragged").draggable();

            $("#draggable-menu div img").click(function () {

                $(".room-container").append("<img src =\"" + $(this).attr("src") + "\">");

                $(".room-container img").draggable();
                $(".tmp").removeClass("tmp");

            });


            // Angular App Link
            var app = angular.module("ItemListApp", []);
        }