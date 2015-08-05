(function () {
    var fullheightStudent = $(window).height();
    $('.js-fullheight-side').css('min-height', fullheightStudent);
    $('.js-class-progress').css('height', fullheightStudent - 105);
}());
//TABS
$('.question-control span').click(function(){
  var tab_id = $(this).attr('data-tab');
  $('.question-control span').removeClass('question-control-active');
  $('.class-progress-content').removeClass('class-progress-content-active');
  $(this).addClass('question-control-active');
  $("#"+tab_id).addClass('class-progress-content-active');
})
//REMARKS 
$('.remarks-student-textareawrap textarea').val().length;
                      
$('.remarks-student-textareawrap textarea').focus(function(){
  $(this).parent('.remarks-student-textareawrap').addClass('textarea-unFocus');
}).blur(function(){
  $(this).parent('.remarks-student-textareawrap').removeClass('textarea-unFocus');
});
//BINDING STARTS
function beforeShowClassprogress(e)
{

}
function afterShowClassprogress(e)
{
    $(".preloader-mf").hide();
    var windowHeight = $(window).height();
    var myClassesHead = $("#mf-classprogress .listing-masthead-wrap").height();
    $('.js-class-progress').css('height', windowHeight - myClassesHead);
}
function beforeHideClassprogress(e)
{
  //Do Something
}

