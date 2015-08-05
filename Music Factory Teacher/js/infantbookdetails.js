(function () {
    //NAV
    DropNav();
    //FULL HEIGHT
    var bookdetailsfullheight = $(window).height();
    $('.js-fullheight').css('min-height', (bookdetailsfullheight - 100));
    $('.js-drawerheight .km-listview-wrapper').css('min-height', (bookdetailsfullheight - 100));
    //TABS
    $('.infant-tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
      $('.infant-tabs li').removeClass('tab-active');
      $('.js-infanttabs .tab-content-wrap').fadeOut();
      $(this).addClass('tab-active');
      $("#"+tab_id).fadeIn();
      if ( $( "video" ).length ) { 
        $("video").get(0).pause();
        $("#"+tab_id).find("video").load();
      } else {
        //do nothing
      }
      if ( $( "audio" ).length ) { 
        $("audio").trigger("pause");
        $("#"+tab_id).find("audio").load();
      } else {
        //do nothing
      }
      if (tab_id === "infanttab-2"){
        FlexsliderReference();
      } else if (tab_id === "infanttab-3") {
        FlexsliderMusic();
      } else if (tab_id === "infanttab-4"){
        $.fancybox.open([{ href: '#comingsoon',wrapCSS: "comingsoon-wrap" }]);
        /*INPUT TEMP
        $(".moments-publish").click(function(){
          $(".moments-img input").toggle();
          $(".moments-active").toggle();
          $(".phototooltip").toggle();
          $(".photoselected").toggle();
        });**/
      } else {
        console.log('no slider');
      }
    })
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
function beforeShowInfantthemes(e)
{
  $(".preloader-mf").show();
  BindInfantLessonDetails(currentBook);
  closeNav();
  InitializeTabs();
  PauseMedia();
}
function afterShowInfantthemes(e)
{
  $(".preloader-mf").hide();
  //$('#lesson-details-infant .km-scroll-container').hide().slideUp();
  //$('#lesson-details-infant .km-scroll-container').slideDown();
}
function beforeHideInfantthemes(e)
{
  PauseMedia();
//Do Something
}
