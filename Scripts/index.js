$(function(){
    $('#btnStart').click(function () {
        $("html,body").animate({scrollTop:$('#information-section').offset().top-$('.navbar').height()});
        return false;
    })
    $('#btnInfo').click(function () {
        $("html,body").animate({scrollTop:$('#information-section').offset().top});
        return false;
    })
    $('#btnEducation').click(function () {
        $("html,body").animate({scrollTop:$('#education-section').offset().top});
        return false;
    })
    $('#btnExperience').click(function () {
        $("html,body").animate({scrollTop:$('.experience').offset().top});
        return false;
    })
    $('#btnTop, .navbar-brand').click(function () {
        $("html,body").animate({scrollTop:0});
        return false;
    })
    $('#btnImage').click(function () {
        $("html,body").animate({scrollTop:$('#images-section').offset().top});
        return false;
    })
    $(window).scroll(function(){
        if($(window).scrollTop() > 50) {
            $('.navbar').css("background-color","#444");
            $('.navbar-toggler span').css("background-color","#fff");
            $('.nav-link, .navbar-brand').css("color","#fff");
        } else {
            $(".navbar").css("background-color","");
            $('.navbar-toggler span').css("background-color","#fff");
            $('.nav-link, .navbar-brand').css("color","#fff");
        }
    })
    $('.nav-link').click(function(){
        $('.navbar-collapse').removeClass('show');
        $('.navbar-toggler').addClass('collapsed');
        $('.navbar-toggler').attr('aria-expanded','false');
    })

    const $menu = $('.navbar-toggler');
    $(document).mouseup(function (e) {
    if (!$menu.is(e.target) // if the target of the click isn't the container...
    && $menu.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $('.navbar-collapse').removeClass('show');
        $('.navbar-toggler').addClass('collapsed');
        $('.navbar-toggler').attr('aria-expanded','false');
    }
    });

    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        
        responsiveClass:true,
        responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
    });

    // $('.item').click(function(){
        
    // })
})