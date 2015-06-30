function afterShow(e){
    setTimeout(function () {
        $("#table-of-contents").data("kendoMobileDrawer").show();
    }, 1);
}
DropNav();
//FULL HEIGHT
var bookdetailsfullheightcover = $(window).height();
$('.js-fullheight-cover').css('min-height', (bookdetailsfullheightcover - 140));
