function KinderafterShow(){
    setTimeout(function () {
        $("#table-of-contents-cover-kinder").data("kendoMobileDrawer").show();
    }, 1);
}
//NAV
DropNav();
//FULL HEIGHT
var bookdetailsfullheightcover = $(window).height();
$('.js-fullheight-cover').css('min-height', (bookdetailsfullheightcover - 140));

//BINDING STARTS
//Function for drawer
function beforeShowKindercover(e)
{
  BindKinderCoverDetails(currentBook);
  closeNav();
}
function afterShowKindercover(e)
{
  $(".preloader-mf").hide();
  KinderafterShow();
}
function beforeHideKindercover(e)
{
//Do Something
}