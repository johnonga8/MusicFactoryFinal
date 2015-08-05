(function () {
    var fullheight = $(window).height();
    $('.js-fullheight-side').css('min-height', fullheight);
    $('.js-individual-classes').css('min-height', fullheight - 85);
}());
//PROGRESS BAR
var CurrentLesson = "20";
var TotalLessons = "40"
var ProgressBarWidth = (CurrentLesson / TotalLessons) * 100;

console.log(ProgressBarWidth);
$(".js-progress-lesson").html(CurrentLesson);
$(".js-tooltip-current-lesson").html(CurrentLesson);
$(".js-tooltip-total-lesson").html(TotalLessons);

$(".progress-bar").css("width" , ProgressBarWidth + "%");
//TABS
$(".individual-classes-tabscontrol-01").click(function(){
  $(".individual-classes-tabscontrol").removeClass('tabcontrol-active');
  $(this).addClass("tabcontrol-active");
  $(".individual-classes-tabs").fadeOut();
  $("#individual-classes-tab-book").fadeIn(); 
});
$(".individual-classes-tabscontrol-02").click(function(){
  $(".individual-classes-tabscontrol").removeClass('tabcontrol-active');
  $(this).addClass("tabcontrol-active");
  $(".individual-classes-tabs").fadeOut();
  $("#individual-classes-tab-student").fadeIn(); 
});
//STUDENTS
$(function() {
    var students = ['Angi Lixian', 'Ao Liting', 'Bai Guangyuan', 'Cai Bihan', 'Bo Shan','Chen Delong', 'Chou Danyun', 'Du Yufeng', 'Gan Siyang', 'Gao Feng', 'Guan Yiting']
    studentsIndex = -1,
    searchTerm = ['A','B','C','D','E','F','G','H']

  $.each(students, function(i) {
      if (students[i].substring(0, 1) == searchTerm[0]) {
          //studentsIndex = i;
          //console.log(i + ': ' + students[i]);
            $(
              '<div class="row"><div class="col-xs-8">'
              + '<img class="individual-student-profile" src="./img/studentphoto-small.jpg"/>'
              + ' <strong class="individual-student-name">' + students[i] + '</strong>'
              + '</div><div class="col-xs-4"><div class="individual-student-link-wrap clearfix"><a class="bttn bttn-view">View</a><span class="individual-student-progress">Complete</span></div></div>'
              ).appendTo(".A-group");
      } else if (students[i].substring(0, 1) == searchTerm[1]) {
            $(
              '<div class="row"><div class="col-xs-8">'
              + '<img class="individual-student-profile" src="./img/studentphoto-small.jpg"/>'
              + ' <strong class="individual-student-name">' + students[i] + '</strong>'
              + '</div><div class="col-xs-4"><div class="individual-student-link-wrap clearfix"><a class="bttn bttn-view">View</a><span class="individual-student-progress">Complete</span></div></div>'
              ).appendTo(".B-group");
      } else if (students[i].substring(0, 1) == searchTerm[2]) {
            $(
              '<div class="row"><div class="col-xs-8">'
              + '<img class="individual-student-profile" src="./img/studentphoto-small.jpg"/>'
              + ' <strong class="individual-student-name">' + students[i] + '</strong>'
              + '</div><div class="col-xs-4"><div class="individual-student-link-wrap clearfix"><a class="bttn bttn-view">View</a><span class="individual-student-progress">Complete</span></div></div>'
              ).appendTo(".C-group");
      }
  });
});
//BINDING STARTS
function beforeShowIndividualClass(e)
{

}
function afterShowIndividualClass(e)
{
    $(".preloader-mf").hide();
}
function beforeHideIndividualClass(e)
{
  //Do Something
}
