(function () {
    //NAV
    DropNav();
    //FULL HEIGHT
    var bookdetailsfullheight = $(window).height();
    $('.js-fullheight').css('min-height', (bookdetailsfullheight - 100));
    $('.js-drawerheight .km-listview-wrapper').css('min-height', (bookdetailsfullheight - 100));
    //TABS
    $(".tab-control-01").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-wrap").fadeOut();
      $(".tab-content-01").fadeIn();
      PauseMedia();
    });
    $(".tab-control-02").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-wrap").fadeOut();
      $(".tab-content-02").fadeIn();
      PauseMedia();
    });
    $(".tab-control-03").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-wrap").fadeOut();
      $(".tab-content-03").fadeIn();
      FlexsliderReference();
      PauseMedia();
    });
    $(".tab-control-04").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-wrap").fadeOut();
      $(".tab-content-04").fadeIn();
      FlexsliderMusic();
      PauseMedia();
    });
    $(".tab-control-05").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-wrap").fadeOut();
      $(".tab-content-05").fadeIn();
      PauseMedia();
    });
    //INPUT TEMP
    $(".moments-publish").click(function(){
      $(".moments-img input").toggle();
      $(".moments-active").toggle();
      $(".phototooltip").toggle();
      $(".photoselected").toggle();
    });
}());
//BINDING STARTS
//Function for drawer
function BeforeShowLesson(e)
{
  BindKinderLessonDetails(currentBook);
  closeNav();
  InitializeTabs();
  PauseMedia();
}
function afterShowAnimate(e)
{
  $('#lesson-details .km-scroll-container').hide().slideUp();
  $('#lesson-details .km-scroll-container').slideDown();
}
function beforeHide(e)
{
  PauseMedia();
}
