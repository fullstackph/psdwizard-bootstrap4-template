$(function () {
    $('.collapse').attr('class', '');

    for (var i = 1; i <= 12; i++) {
        $('.col-sm-' + i).addClass('col-xs-' + i);
        $('.col-md-' + i).addClass('col-xs-' + i);
        $('.col-lg-' + i).addClass('col-xs-' + i);
    }
});