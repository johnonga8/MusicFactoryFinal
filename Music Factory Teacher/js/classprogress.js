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
  $('.remarks-student-textareawrap textarea').focus(function(){
    $(this).parent('.remarks-student-textareawrap').addClass('textarea-unFocus');
  }).blur(function(){
    $(this).parent('.remarks-student-textareawrap').removeClass('textarea-unFocus');
  });
/**
var fullLength;
function jsTextbox(){
  $(".remarks-student-textareawrap textarea").each(function(i){
    len=$(this).val().length;
    fullLength = $(this).val();
    if(len>100)
    {
      $(this).val($(this).val().substr(0,100)+'...');
    }
    return fullLength;
  });
  $('.remarks-student-textareawrap textarea').focus(function(){
    $(this).parent('.remarks-student-textareawrap').addClass('textarea-unFocus');
  }).blur(function(){
    $(this).parent('.remarks-student-textareawrap').removeClass('textarea-unFocus');
    $(this).val(fullLength);
  });
}
**/
                     
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

