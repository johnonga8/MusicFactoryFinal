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
      $("video").get(0).pause();
      $("audio").trigger("pause");
    });
    $(".tab-control-02").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-wrap").fadeOut();
      $(".tab-content-02").fadeIn();
      $("video").get(0).pause();
      $("audio").trigger("pause");
    });
    $(".tab-control-03").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-wrap").fadeOut();
      $(".tab-content-03").fadeIn();
      FlexsliderReference();
      $("video").get(0).pause();
      $("audio").trigger("pause");
    });
    $(".tab-control-04").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-wrap").fadeOut();
      $(".tab-content-04").fadeIn();
      FlexsliderMusic();
      $("video").get(0).pause();
      $("audio").get(0).pause();
    });
    $(".tab-control-05").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-wrap").fadeOut();
      $(".tab-content-05").fadeIn();
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
}

