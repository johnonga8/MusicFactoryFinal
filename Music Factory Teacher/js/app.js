//INITIATE APP
var app = new kendo.mobile.Application(document.body);
//DRAWER
function hideDrawer() {
    $(".table-of-contents").data("kendoMobileDrawer").hide();
}
//MEDIA
function PauseMedia() {
  if ( $( "video" ).length ) { 
    $("video").get(0).pause();
    $("audio").trigger("pause");
    $("audio").load();
    $("video").load();
  } else {
    //do nothing
  }
};
function removeScroll(){
    $("#lesson-details .km-scroll-container").css("-webkit-transform","translate3d(0px, 0px, 0px)");
};
function onShowDrawer(){
    var isVisible = $('.table-of-contents').getKendoMobileDrawer().visible;
    closeNav();
};
//REMOVE COLLAPSIBLE ON PAGE LOAD
function closeNav() {
  $(".js-subnav-link").siblings('ul').hide();
  $(".js-subnav-link").removeClass("active-link");
  $(".js-subnav-link").parent("li").removeClass("li-active-link");
  $(".js-subnav-link").children(".glyphicon").removeClass("glyphicon-triangle-top").addClass("glyphicon-triangle-bottom"); 
  $("#scroller .km-scroll-container").css("transform","translate3d(0px, 0px, 0px)");
  $("#scroller .km-scroll-container").css("-webkit-transform","translate3d(0px, 0px, 0px)");
};
//COLLAPSABLE NAV
function DropNav(){
  $(".js-subnav-link").click(function(){
  $(this).siblings('ul').slideToggle();
  $(this).toggleClass("active-link");
  $(this).parent("li").toggleClass("li-active-link");
  $(this).children(".glyphicon").toggleClass("glyphicon-triangle-bottom glyphicon-triangle-top");  
  $(".bookdetails-drawer-firstnav .km-scroll-container").css("transform","translate3d(0px, 0px, 0px)");
  $(".bookdetails-drawer-firstnav .km-scroll-container").css("-webkit-transform","translate3d(0px, 0px, 0px)");
  });
};
//FANCYBOX
$(document).ready(function() {
  $('.fancybox').fancybox({
  });
});
//FLEXSLIDER
function FlexsliderReference(){
  $('.gallery-refer').flexslider({
    slideshow: false,
    animation: "slide",
    controlNav: "thumbnails"
  });  
};
function FlexsliderMusic(){
  $('.gallery-music').flexslider({
    slideshow: false,
    animation: "slide",
    controlNav: "thumbnails"
  });  
};
//TABS Initialize
function InitializeTabs(){
  $(".bookdetails-tabs li").removeClass('tab-active');
  $(".tab-control-01").addClass("tab-active");
  $(".tab-content-01").fadeIn();
  $(".tab-content-02").fadeOut();
  $(".tab-content-03").fadeOut();
  $(".tab-content-04").fadeOut();
  $(".tab-content-05").fadeOut();
  if ( $( "video" ).length ) { 
    $("video").load();
  } else {
    //do nothing
  }
};
//LINQ INITIALIZATION
Array.prototype.First = function (predicate, def) {
    var l = this.length;
    if (!predicate) return l ? this[0] : def == null ? null : def;
    for (var i = 0; i < l; i++)
        if (predicate(this[i], i, this))
            return this[i];
    return def == null ? null : def;
};




