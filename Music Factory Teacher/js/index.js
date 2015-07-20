function beforeShowIndex(e)
{
    app.pane.loader.hide();
}
function beforeHideIndex(e)
{
    app.pane.loader.show();
}
function beforeShowPassword(e)
{
    app.pane.loader.hide();
}

$(".js-proceed").click(function(){
  LogoutUser ($("#login-username").val());
  LogIn($("#login-username").val(), $("#login-password").val());
});

$(".bttn-login").click(function(){
  LogIn($("#login-username").val(), $("#login-password").val());
});

$( ".login-input" ).focus(function() {
  $(".login-error").hide();
});

$(".js-modal-close").click(function(){
  $.fancybox.close([{href : '#alreadylogged'}]);
});