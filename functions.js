// JavaScript Document
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.scrollup').fadeIn();
            $('.header').addClass('fix');
        } else {
            $('.scrollup').fadeOut();
            $('.header').removeClass('fix');
        }
    });
    $('.scrollup').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    /*$("#banner-scroll").click(function() {
        $('html, body').animate({ scrollTop:$("#home_about").offset().top-80}, 500);
    });*/

    $('.aboutlih2').click(function () {
        const tTab = $(this).attr('rel');
        $('.about_valuesDiv').slideUp('500');
        $('.aboutlih2').removeClass('open'); 
        var text = $('#'+tTab);
        if (text.is(':hidden')) {
            text.slideDown('500');
            $(this).addClass('open');     
        } else {
            text.slideUp('500');
            $(this).removeClass('open');     
        } 
    });

    $(".micon").click(function() {
        $('.menu_nav').addClass('open');
        $('.menuoverlay').show();
        $('body').addClass('open');
    });
    $(".mclose, .menuoverlay").click(function() {
        $('.menu_nav').removeClass('open');
        $('.menuoverlay').hide();
        $('body').removeClass('open');
    });

    $(".menu li a").each(function() {
        if ($(this).next().length > 0) {
            $(this).addClass("more");
        }
    });


    $('#menu li').click(function () {
        $('.menu ul').slideUp('500');
        $('#menu li').removeClass('open'); 
        var text = $(this).find('ul');
        if (text.is(':hidden')) {
            text.slideDown('500');
            $(this).addClass('open');     
        } else {
            text.slideUp('500');
            $(this).removeClass('open');     
        } 
    });

    $('.about_valuesDiv:first').show();
    $('#about_values li:first').addClass('active');
    $('#about_values li').click(function () {
        $('#about_values li').removeClass('active');
        $('.about_valuesDiv').hide();
        $(this).addClass('active'); 
        var vTab = $(this).attr('rel'); 
        $('#'+vTab).show();
    });

});