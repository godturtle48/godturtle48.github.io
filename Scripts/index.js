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
    $(window).scroll(function(){
        if($(window).scrollTop() > 50) {
            $('.navbar').css("background-color","white");
            $('.navbar-toggler span').css("background-color","#444");
            $('.nav-link, .navbar-brand').css("color","black");
        } else {
            $(".navbar").css("background-color","");
            $('.navbar-toggler span').css("background-color","#fff");
            $('.nav-link, .navbar-brand').css("color","white");
        }
    })
    $('.nav-link').click(function(){
        $('.navbar-toggler').trigger('click');
    })

    const $menu = $('#collapsibleNavId');
    $(document).mouseup(function (e) {
    if (!$menu.is(e.target) // if the target of the click isn't the container...
    && $menu.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $('.navbar-collapse').removeClass('show');
        $('.navbar-toggler').addClass('collapsed');
        $('.navbar-toggler').attr('aria-expanded','false');
    }
    });
})