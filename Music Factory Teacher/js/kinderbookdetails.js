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
      $('.js-kindertabs .tab-content-wrap').hide();
      $(this).addClass('tab-active');
      $("#"+tab_id).show();
        if(currentVideoUrl != null)
        {
          initializeJWPlayer("video_kinder", currentVideoUrl);
          jwplayer("video_kinder").on('fullscreen', function(e) {
            if(jwplayer("video_kinder").getFullscreen(true))
            {
              var screenheight = $(window).height();
              var screenheightTotal = screenheight - 100;
              $(".jwplayer.jw-flag-fullscreen").attr('style',  'height:' + screenheightTotal +'px !important');
            }
            else
            {
              $(".jwplayer").attr('style',  'height:' + 360 +'px !important;width:400px!important');
            }
          });
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
}
function beforeHideKinderlessons(e)
{
  stopMedia();
//Do Something
}

