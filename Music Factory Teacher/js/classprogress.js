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

