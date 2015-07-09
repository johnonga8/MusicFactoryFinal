(function () {
    var fullheight = $(window).height();
    $('.js-fullheight-side').css('min-height', fullheight);
    $('.listing-books').css('height', fullheight - 85);
}());
//BINDING STARTS
function beforeShow(e)
{
   GetAllBooks();
}

