function afterShow(e){
    setTimeout(function () {
        $("#table-of-contents").data("kendoMobileDrawer").show();
    }, 1);
}
$(".js-subnav-link").click(function(){
  $(this).siblings('ul').slideToggle();
  $(this).toggleClass("active-link");
  $(this).parent("li").toggleClass("li-active-link");
  $(this).children(".glyphicon").toggleClass("glyphicon-triangle-bottom glyphicon-triangle-top");      
});
//FULL HEIGHT
var bookdetailsfullheightcover = $(window).height();
$('.js-fullheight-cover').css('min-height', (bookdetailsfullheightcover - 140));
function hideDrawer() {
    $("#table-of-contents").data("kendoMobileDrawer").hide();
}