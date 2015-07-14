//FULL HEIGHT
var bookdetailsfullheightpreface = $(window).height();
$('.js-fullheight-preface').css('min-height', (bookdetailsfullheightpreface - 100));

//BINDING STARTS
//Function for drawer
function InfantBeforeShowPreface(e)
{
  BindInfantPrefaceDetails(currentBook);
  closeNav();
}