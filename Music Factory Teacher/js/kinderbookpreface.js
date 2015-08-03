//FULL HEIGHT
var bookdetailsfullheightpreface = $(window).height();
$('.js-fullheight-preface').css('min-height', (bookdetailsfullheightpreface - 100));
//BINDING STARTS
//Function for drawer
function beforeShowKinderpreface(e)
{
  $(".preloader-mf").show();
  BindKinderPrefaceDetails(currentBook);
  closeNav();
}
function afterShowKinderpreface(e)
{
  $(".preloader-mf").hide();
}
function beforeHideKinderPreface(e)
{
//Do Something
}
