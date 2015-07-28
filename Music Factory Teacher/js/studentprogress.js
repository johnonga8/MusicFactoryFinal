(function () {
    var fullheightStudent = $(window).height();
    $('.js-fullheight-side').css('min-height', fullheightStudent);
    $('.js-student-progress').css('height', fullheightStudent - 226);
}());
//EDIT MODE
$(".js-editbttn").click(function(){
  //Disable Items
  $(".js-form").toggleClass("mode-editoff mode-editon");
  $('.js-form input').prop('disabled', function(i, v) { return !v; });
  $('.js-form textarea').prop('disabled', function(i, v) { return !v; });
});
