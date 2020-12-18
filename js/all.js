$(document).ready(function () {
    $('.menu > li > .slidemenu').click(function (event) {
        event.preventDefault();
        $(this).toggleClass('slideopen');
        $(this).parent().siblings().find('a').removeClass('slideopen')
        $(this).parent().find('ul').slideToggle(300);
        $(this).parent().siblings().find('ul').slideUp(300);
    });
    $(".show_sidebar>a").on('click', function (e) {
        e.preventDefault();
        $('.menu,.navbar').toggleClass('open');    
    });
    












});