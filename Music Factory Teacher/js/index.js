//FULL HEIGHT
var indexFullheight = $(window).height();
$('.js-fullheight-index').css('height', indexFullheight);


$("#appLanguage").val();

function afterShowIndex(e)
{
   $(".preloader-mf").hide();
}
function beforeHideIndex(e)
{
 //Do Something
}

function beforeShowIndex(e)
{
    var langSelect = $(".choose-language select").val();
    $("#appLanguage").val(langSelect);
    currentAppCultureName = $("#appLanguage").val()
    GetTeacherAppLabels(currentAppCultureName);
    BindLoginDetails();
}
//PASSWORD
function beforeShowPassword(e)
{
    $(".preloader-mf").hide();
}


/*$(".js-proceed").click(function(){
  LogoutUser ($("#login-username").val());
  LogIn($("#login-username").val(), $("#login-password").val());
});

$(".bttn-login").click(function(){
  $(".preloader-log").show();
  LogIn($("#login-username").val(), $("#login-password").val());
  $(".preloader-log").hide();
});*/

$( ".login-input" ).focus(function() {
  $(".login-error").hide();
});

/*$(".js-modal-close").click(function(){
  $.fancybox.close([{href : '#alreadylogged'}]);
});*/