$(document).ready(function () {
    // header animation
    $('.jumbotron h1').addClass('show');
    $('.jumbotron p').addClass('show');
    $('header .ornament').addClass('show');

    $(window).scroll(function () { 
        let wScroll = $(this).scrollTop();
        
        // popular menu animation
        if (wScroll > $('.popular-menu').offset().top) {
            $('.popular-menu .ornament').addClass('show');
            $('.popular-menu .title').addClass('show');
            $('.popular-menu .card').each(function (i) {
                setTimeout(function () {  
                    $('.popular-menu .card').eq(i).addClass('show');
                    $('.popular-menu .btn').addClass('show');
                }, 400 * (1+i));
            });
        }
        
        // promo animation
        if (wScroll > $('.promo .row').eq(0).offset().top - 200) {
            $('.promo img').eq(0).addClass('show');
            setTimeout(function () { 
                $('.promo .text-promo').eq(0).addClass('show');
             }, 300);
        }
        if (wScroll > $('.promo .row').eq(1).offset().top - 200) {
            $('.promo img').eq(1).addClass('show');
            setTimeout(function () { 
                $('.promo .text-promo').eq(1).addClass('show');
             }, 300);
        }

        // how to order 
        if (wScroll > $('.how-to-order').offset().top - 150) {
            $('.how-to-order h4').addClass('show');
            $('.how-to-order .ornament').addClass('show');
            $('.how-to-order .col-md-4').each(function (i) {
                setTimeout(function () {
                    $('.how-to-order .col-md-4').eq(i).addClass('show');
                }, 500 * (1+i));
            });
        }
        
        // free-delivery
        if (wScroll > $('.free-delivery').offset().top - 150) {
            $('.free-delivery .container').addClass('show');
        }

        // testimonial
        if (wScroll > $('.testimonial').offset().top - 150) {
            $('.testimonial .container').addClass('show');
            
        }

            
        
    });
});