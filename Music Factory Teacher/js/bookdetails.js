(function () {
    //FULL HEIGHT
    var bookdetailsfullheight = $(window).height();
    $('.js-fullheight').css('min-height', (bookdetailsfullheight - 100));
    $('.js-drawerheight .km-listview-wrapper').css('min-height', (bookdetailsfullheight - 100));
    //TABS
    $(".tab-control-01").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-01").fadeIn();
      $(".tab-content-02").fadeOut();
      $(".tab-content-03").fadeOut();
      $(".tab-content-04").fadeOut();
      $(".tab-content-05").fadeOut();
    });
    $(".tab-control-02").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-02").fadeIn();
      $(".tab-content-01").fadeOut();
      $(".tab-content-03").fadeOut();
      $(".tab-content-04").fadeOut();
      $(".tab-content-05").fadeOut();
    });
    $(".tab-control-03").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-03").fadeIn();
      $(".tab-content-01").fadeOut();
      $(".tab-content-02").fadeOut();
      $(".tab-content-04").fadeOut();
      $(".tab-content-05").fadeOut();
      Flexslider();
    });
    $(".tab-control-04").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-04").fadeIn();
      $(".tab-content-01").fadeOut();
      $(".tab-content-02").fadeOut();
      $(".tab-content-03").fadeOut();
      $(".tab-content-05").fadeOut();
      Flexslider();
    });
    $(".tab-control-05").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-05").fadeIn();
      $(".tab-content-01").fadeOut();
      $(".tab-content-02").fadeOut();
      $(".tab-content-03").fadeOut();
      $(".tab-content-04").fadeOut();
    });
    //INPUT TEMP
    $(".moments-publish").click(function(){
      $(".moments-img input").toggle();
      $(".moments-active").toggle();
      $(".phototooltip").toggle();
      $(".photoselected").toggle();
    });
}());


