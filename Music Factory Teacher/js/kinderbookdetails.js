(function () {
    //NAV
    DropNav();
    //FULL HEIGHT
    var bookdetailsfullheight = $(window).height();
    $('.js-fullheight').css('min-height', (bookdetailsfullheight - 100));
    $('.js-drawerheight .km-listview-wrapper').css('min-height', (bookdetailsfullheight - 100));
    //TABS
    $('.kinder-tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
      $('.kinder-tabs li').removeClass('tab-active');
      $('.js-kindertabs .tab-content-wrap').fadeOut();
      $(this).addClass('tab-active');
      $("#"+tab_id).fadeIn();
      if ( $( "video" ).length ) { 
        $("video").get(0).pause();
        $("#"+tab_id).find("video").load();
        $('video').on('loadstart', function (event) {
            $(this).addClass('background');
            $(this).attr("poster", "./img/videoposter.jpg");
        });
        $('video').on('canplay', function (event) {
            $(this).attr("poster", "./img/videoposter.jpg");
        });
      } else {
        //do nothing
      }
      if ( $( "audio" ).length ) { 
        $("audio").trigger("pause");
        $("#"+tab_id).find("audio").load();
      } else {
        //do nothing
      }
      if (tab_id === "kindertab-3"){
        FlexsliderReference();
      } else if (tab_id === "kindertab-4") {
        FlexsliderMusic();
      } else if (tab_id === "kindertab-5"){
        //INPUT TEMP
        $.fancybox.open([{ href: '#comingsoon',wrapCSS: "comingsoon-wrap" }]);
      } else {
        console.log('no slider');
      }
      
    })


}());
//BINDING STARTS
//Function for drawer
function beforeShowKinderlessons(e)
{
  $(".preloader-mf").show();
  BindKinderLessonDetails(currentBook);
  closeNav();
  InitializeTabs();
  PauseMedia();
}
function afterShowKinderlessons(e)
{
  $(".preloader-mf").hide();
  //$('#lesson-details-kinder .km-scroll-container').hide().slideUp();
  //$('#lesson-details-kinder .km-scroll-container').slideDown();
}
function beforeHideKinderlessons(e)
{
  stopMedia();
//Do Something
}
