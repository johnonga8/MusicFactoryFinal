(function () {
    var fullheight = $(window).height();
    $('.js-fullheight-side').css('min-height', fullheight);
    $('.js-individual-classes').css('height', fullheight - 85);
}());
//BINDING STARTS
function beforeShowMyclasses(e)
{

}
function afterShowMyclasses(e)
{
    $(".preloader-mf").hide();
    var windowHeight = $(window).height();
    var myClassesHead = $("#mf-myclasses .listing-masthead-wrap").height();
    $('.js-myclasses').css('height', windowHeight - myClassesHead);
}
function beforeHideMyclasses(e)
{
  //Do Something
}
