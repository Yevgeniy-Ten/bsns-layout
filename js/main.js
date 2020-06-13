$(document).ready(function () {
    $(".burger-menu").click(function (event) {
        $(".burger-menu,.header__list").toggleClass("item--visible");
    });
});