(function () {
    //FULL HEIGHT
    var fullheight = $(window).height();
    $('.js-fullheight').css('min-height', (fullheight - 100));
    //TABS
    $(".tab-control-01").click(function(){
      $(".tab-content-01").show();
      $(".tab-content-02").hide();
      $(".tab-content-03").hide();
    });
    $(".tab-control-02").click(function(){
      $(".tab-content-02").show();
      $(".tab-content-01").hide();
      $(".tab-content-03").hide();
    });
    $(".tab-control-03").click(function(){
      $(".tab-content-03").show();
      $(".tab-content-01").hide();
      $(".tab-content-02").hide();
    });
    //NAV
    $('.js-subnav-link').click(function(e){
      e.preventDefault();
      $(this).siblings('ul').slideToggle();
      $(this).children(".glyphicon").toggleClass("glyphicon-triangle-bottom glyphicon-triangle-top");
    });
}());
function hideDrawer() {
    $("#book-chapters").data("kendoMobileDrawer").hide();
}