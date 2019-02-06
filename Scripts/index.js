$(function(){
    $('#btnStart').click(function () {
        $("html,body").animate({scrollTop:$('#information-section').offset().top});
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
        $("html,body").animate({scrollTop:$('#education-section').offset().top});
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
            // $('.navbar-toggler').css("border-color","black");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".navbar").css("background-color","");
            $('.navbar-toggler span').css("background-color","#fff");
            $('.nav-link, .navbar-brand').css("color","white");
            // $('.navbar-toggler').css("border-color","white");
        }
    })
    $('.nav-link').click(function(){
        $('.navbar-toggler').trigger('click');
    })
    // $('.navbar-toggler-icon').click(function(){

    // })
})