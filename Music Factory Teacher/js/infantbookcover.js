function InfantafterShow(){
    setTimeout(function () {
        $("#table-of-contents-cover-infant").data("kendoMobileDrawer").show();
    }, 1);
}
//NAV
DropNav();
//FULL HEIGHT
var bookdetailsfullheightcover = $(window).height();
$('.js-fullheight-cover').css('min-height', (bookdetailsfullheightcover - 100));

//BINDING STARTS
//Function for drawer
function initInfantcover(e)
{
//Do Something
}
function beforeShowInfantcover(e)
{
  BindInfantCoverDetails(currentBook);
  closeNav();
}
function afterShowInfantcover(e)
{  
  $(".preloader-mf").hide();
  InfantafterShow();
}
function beforeHideInfantcover(e)
{
  //Do Something
}