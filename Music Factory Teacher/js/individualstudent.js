function showIndividualStudent(e)
{
    app.pane.loader.hide();
}
(function () {
    var fullheight = $(window).height();
    $('.js-fullheight-side').css('min-height', fullheight);
    $('.js-individual-student').css('height', fullheight - 145);
}());
