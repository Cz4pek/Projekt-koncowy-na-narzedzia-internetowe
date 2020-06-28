$(document).ready(function () {

    var caption = $('#ani');
    caption.css({left: '1000px', opacity: '0'});
    caption.animate({left: '0', opacity: '1'}, "slow");



    $('#kraj').click(function () {
        ofertakKraj();
        $('#1breadcrumb').html('Podróże w kraju');
        pokazOferty()
    });

    $('#europa').click(function () {
        ofertaEuropa();
        $('#1breadcrumb').html('Podróże w Europie');
        pokazOferty()
    });


    $('#swiat').click(function () {
        ofertaSwiat();
        $('#1breadcrumb').html('Podróże na inny kontynent');
        pokazOferty()
    });

    $('#next').click(function () {
        if ($('#1').hasClass('active')) strona2();
        else if ($('#2').hasClass('active'))  strona3();
    });

    $('#previous').click(function () {
        if ($('#3').hasClass('active')) strona2();
        else if ($('#2').hasClass('active'))  strona1();
    });

    $('#1').click(function () {
        strona1()
    });

    $('#2').click(function () {
        strona2()
    });

    $('#3').click(function () {
        strona3()
    });
    $('#pokaz').click(function () {
        pokazListe();
    });
});
function strona1() {
    if ($('#kraj').hasClass('active')) ofertakKraj();
    else if ($('#europa').hasClass('active')) ofertaEuropa();
    else if ($('#swiat').hasClass('active')) ofertaSwiat();
    $('#2').removeClass('active');
    $('#3').removeClass('active');
    $('#1').addClass('active');
    $('.card').css('display','flex');
    $('#brak').css('display','none');


}
function strona2() {
    ofertaBrak();
    $('#3').removeClass('active');
    $('#1').removeClass('active');
    $('#2').addClass('active');
}
function strona3() {
    ofertaBrak();
    $('#1').removeClass('active');
    $('#2').removeClass('active');
    $('#3').addClass('active');
}

function pokazOferty() {
    var oferty = $('#oferty');
    oferty.css({opacity: '0'});
    oferty.animate({opacity: '1'}, "slow");
}