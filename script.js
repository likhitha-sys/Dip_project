// Preloader
$(window).on('load', function() {
    $('.preloader').fadeOut('slow');
});

// Back to Top Button
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').addClass('active');
    } else {
        $('.back-to-top').removeClass('active');
    }
});

$('.back-to-top').click(function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, '300');
});

// Smooth Scrolling
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 1000, function() {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    return false;
                } else {
                    $target.attr('tabindex','-1');
                    $target.focus();
                }
            });
        }
    }
});

// Scroll Animation
function animateOnScroll() {
    $('.animate-up').each(function() {
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        
        if (scroll + windowHeight > position) {
            $(this).addClass('show');
        }
    });
}

$(window).scroll(function() {
    animateOnScroll();
});

$(document).ready(function() {
    animateOnScroll();
});

// Form Submission
$('.appointment-form form').submit(function(e) {
    e.preventDefault();
    alert('Thank you for your appointment request. We will contact you shortly to confirm your booking.');
    $(this).trigger('reset');
});