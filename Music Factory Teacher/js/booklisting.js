(function () {
    var fullheight = $(window).height();
    $('.js-fullheight-side').css('min-height', fullheight);
    $('.listing-books').css('height', fullheight - 85);
}());
//BINDING STARTS
function beforeShowListing(e)
{
    app.pane.loader.show();
    GetAllBooks();

}
function showListing(e)
{
    app.pane.loader.hide();
}

$(".bttn-signout").click(function(){
    LogoutUser (currentUserName);
    app.navigate("#");
});



