function afterShow(){
    setTimeout(function () {
        $("#table-of-contents").data("kendoMobileDrawer").show();
    }, 1);
}
//NAV
DropNav();
//FULL HEIGHT
var bookdetailsfullheightcover = $(window).height();
$('.js-fullheight-cover').css('min-height', (bookdetailsfullheightcover - 140));
(function(){
//INITIATE APP
  var app = new kendo.mobile.Application(document.body);
}());