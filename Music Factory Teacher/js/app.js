(function(){
//INITIATE APP
  var app = new kendo.mobile.Application(document.body);
}());
//DRAWER
function hideDrawer() {
    $("#table-of-contents").data("kendoMobileDrawer").hide();
}
//COLLAPSABLE NAV
function DropNav(){
  $(".js-subnav-link").click(function(){
  $(this).siblings('ul').slideToggle();
  $(this).toggleClass("active-link");
  $(this).parent("li").toggleClass("li-active-link");
  $(this).children(".glyphicon").toggleClass("glyphicon-triangle-bottom glyphicon-triangle-top");      
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




