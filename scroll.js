// jQuery(function($)
$(document).ready(function()
{
    $('#scrollUp').on( "click", function() {
        $(window).scrollTo(0, 500);
    });
    $('#link3').on( "click", function() {
        $.scrollTo($('.headline'), {duration:1000, offset: -200});
    });
});

$(window).scroll(function() {
    if($(this).scrollTop()>300) 
    {
        $('#scrollUp').css('visibility','visible');
        $('#scrollUp').fadeIn();
    }
    else $('#scrollUp').fadeOut();
});
