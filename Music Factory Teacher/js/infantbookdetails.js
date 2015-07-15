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
      if ( $( "video" ).length ) { 
        $("video").get(0).pause();
        $("audio").trigger("pause");
        $(".tab-control-01 audio").load();
        $(".tab-control-01 video").load();
      } else {
        //do nothing
      }
      
    });
    $(".tab-control-02").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-wrap").fadeOut();
      $(".tab-content-02").fadeIn();
      if ( $( "video" ).length ) { 
        $("video").get(0).pause();
        $("audio").trigger("pause");
        $(".tab-control-02 audio").load();
        $(".tab-control-02 video").load();
      } else {
        //do nothing
      }
    });
    $(".tab-control-03").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-wrap").fadeOut();
      $(".tab-content-03").fadeIn();
      FlexsliderReference();
      if ( $( "video" ).length ) { 
        $("video").get(0).pause();
        $("audio").trigger("pause");
        $(".tab-control-03 audio").load();
        $(".tab-control-03 video").load();
      } else {
        //do nothing
      }
    });
    $(".tab-control-04").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-wrap").fadeOut();
      $(".tab-content-04").fadeIn();
      FlexsliderMusic();
      if ( $( "video" ).length ) { 
        $("video").get(0).pause();
        $("audio").trigger("pause");
        $(".tab-control-04 audio").load();
        $(".tab-control-04 video").load();
      } else {
        //do nothing
      }
    });
    $(".tab-control-05").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-wrap").fadeOut();
      $(".tab-content-05").fadeIn();
      if ( $( "video" ).length ) { 
        $("video").get(0).pause();
        $("audio").trigger("pause");
      } else {
        //do nothing
      }
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
function InfantBeforeShowLesson(e)
{
  BindInfantLessonDetails(currentBook);
  closeNav();
  InitializeTabs();
  PauseMedia();
}
function InfantafterShowAnimate(e)
{
  $('#lesson-details-infant .km-scroll-container').hide().slideUp();
  $('#lesson-details-infant .km-scroll-container').slideDown();
}
function InfantbeforeHide(e)
{
  PauseMedia();
}
