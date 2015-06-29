(function () {
    //FULL HEIGHT
    var bookdetailsfullheight = $(window).height();
    $('.js-fullheight').css('min-height', (bookdetailsfullheight - 100));
    $('.js-drawerheight .km-listview-wrapper').css('min-height', (bookdetailsfullheight - 100));
    //TABS
    $(".tab-control-01").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-01").show();
      $(".tab-content-02").hide();
      $(".tab-content-03").hide();
      $(".tab-content-04").hide();
      $(".tab-content-05").hide();
    });
    $(".tab-control-02").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-02").show();
      $(".tab-content-01").hide();
      $(".tab-content-03").hide();
      $(".tab-content-04").hide();
      $(".tab-content-05").hide();
    });
    $(".tab-control-03").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-03").show();
      $(".tab-content-01").hide();
      $(".tab-content-02").hide();
      $(".tab-content-04").hide();
      $(".tab-content-05").hide();
    });
    $(".tab-control-04").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-04").show();
      $(".tab-content-01").hide();
      $(".tab-content-02").hide();
      $(".tab-content-03").hide();
      $(".tab-content-05").hide();
    });
    $(".tab-control-05").click(function(){
      $(".bookdetails-tabs li").removeClass('tab-active');
      $(this).addClass("tab-active");
      $(".tab-content-05").show();
      $(".tab-content-01").hide();
      $(".tab-content-02").hide();
      $(".tab-content-03").hide();
      $(".tab-content-04").hide();
    });
}());
function hideDrawer() {
    $("#table-of-contents").data("kendoMobileDrawer").hide();
}
