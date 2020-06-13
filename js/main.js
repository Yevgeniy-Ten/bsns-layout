$(document).ready(function () {
    $(".burger-menu").click(function (event) {
        $(".burger-menu,.header__menu").toggleClass("item--visible");
    });
});