(function(){
//INITIATE APP
  var app = new kendo.mobile.Application(document.body);
}());
//DRAWER
function hideDrawer() {
    $("#table-of-contents").data("kendoMobileDrawer").hide(
      //function(){};
    );
}
//REMOVE COLLAPSIBLE ON PAGE LOAD
function closeNav() {
  $(".js-subnav-link").siblings('ul').hide();
  $(".js-subnav-link").removeClass("active-link");
  $(".js-subnav-link").parent("li").removeClass("li-active-link");
  $(".js-subnav-link").children(".glyphicon").removeClass("glyphicon-triangle-top"); 
  $(".bookdetails-drawer-firstnav .km-scroll-container").css("transform","translate3d(0px, 0px, 0px)");
  $(".bookdetails-drawer-firstnav .km-scroll-container").css("-webkit-transform","translate3d(0px, 0px, 0px)");
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
function Flexslider(){
  $('.gallery-01').flexslider({
    slideshow: false,
    animation: "slide",
    controlNav: "thumbnails"
  });  
};




