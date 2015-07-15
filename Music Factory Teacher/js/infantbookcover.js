function InfantafterShow(){
    setTimeout(function () {
        $("#table-of-contents-cover-infant").data("kendoMobileDrawer").show();
    }, 1);
}
//NAV
DropNav();
//FULL HEIGHT
var bookdetailsfullheightcover = $(window).height();
$('.js-fullheight-cover').css('min-height', (bookdetailsfullheightcover - 140));

//BINDING STARTS
//Function for drawer
function InfantBeforeShowCover(e)
{
  BindInfantCoverDetails(currentBook);
  closeNav();
}