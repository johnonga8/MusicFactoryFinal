(function () {
    var fullheight = $(window).height();
    $('.js-fullheight-side').css('min-height', fullheight);
    $('.js-individual-student').css('height', fullheight - 145);
}());
//BINDING STARTS
function beforeShowIndividualStudent(e)
{

}
function afterShowIndividualStudent(e)
{
    $(".preloader-mf").hide();
    var windowHeight = $(window).height();
    var myClassesHead = $("#mf-individualstudent .listing-masthead-wrap").height();
    $('.js-individual-student').css('height', windowHeight - myClassesHead);
}
function beforeHideIndividualStudent(e)
{
  //Do Something
}