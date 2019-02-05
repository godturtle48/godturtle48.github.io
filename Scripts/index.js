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
    $('#btnTop').click(function () {
        $("html,body").animate({scrollTop:0});
        return false;
    })
    $(window).scroll(function(){
        if($(window).scrollTop() > 50) {
            $('.navbar').addClass("white-bg");
            $('.nav-item').addClass("black-text");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".navbar").removeClass("white-bg");
            $(".nav-item").removeClass("black-text");
        }
    })
})