function showMyClasses(e)
{
    app.pane.loader.hide();
}
(function () {
    var fullheight = $(window).height();
    $('.js-fullheight-side').css('min-height', fullheight);
    $('.js-individual-classes').css('height', fullheight - 85);
}());