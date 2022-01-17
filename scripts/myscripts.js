// START OF HOME DINING CAROUSEL 
var mainSlider;
$(document).ready(function () {
    mainSlider = $('.wineDineCarousel');
    mainSlider.owlCarousel({
    // autoplay: true,
    // autoplayTimeout: 5000,
    lazyLoad: true,
    loop: true,
    items: 1
    // smartSpeed: 800 
    });


    mainSlider.on('changed.owl.carousel', function (property) {
        var current = property.item.index;
        var prev = $(property.target).find(".owl-item").eq(current).prev().find("img").attr('src');
        var next = $(property.target).find(".owl-item").eq(current).next().find("img").attr('src');

        $('.navPrev').find('img').attr('src', prev);
        $('.navNext').find('img').attr('src', next);
    });

});

// if we dont have touchscreen 


$(".navNext").on( "mouseover", function() {
    mainSlider.trigger('next.owl.carousel', [300]);
    return false;
});

$(".navPrev").on( "mouseover", function() {
    mainSlider.trigger('prev.owl.carousel', [300]);
    return false;
});


//if we have touchscreen
if(window.matchMedia("(pointer: coarse)").matches) {
    

    $(".navNext").on( "click", function() {
        mainSlider.trigger('next.owl.carousel', [300]);
        return false;
    });

    $(".navPrev").on( "click", function() {
        mainSlider.trigger('prev.owl.carousel', [300]);
        return false;
    });
}
// END OF HOME DINING CAROUSEL 

$(document).ready(function () {


    //start of awards carousel 
    $('.awards-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        navText: ["", ""],
        dots: false,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            480:{
                items:3,
                nav:true
            },
            575:{
                items:4,
                nav:true
            },
            767:{
                items:6,
                nav:true
            },
            1000:{
                items:8,
                nav:true
            },
            1500:{
                items:15
            }
        }
    });
    //end of awards carousel 


    //start of offers carousel 
    $('.offersCarousel').owlCarousel({
        loop:true,
        margin:40,
        nav:true,
        navText: ["", ""],
        dots: false,
        responsive:{
            0:{
                items:1
            },
            1024:{
                items:2
            }
        }
    });
    //end of offers carousel 


    //start of news carousel 
    $('.newsCarousel').owlCarousel({
        loop:true,
        margin:80,
        nav:true,
        navText: ["", ""],
        dots: false,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            992:{
                items:2,
                nav:true
            },
            1400:{
                items:3,
                nav:false
            }
        }
    });
    //end of news carousel 

    //start of news carousel 
    $('.insta-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:2,
                loop:true,
                stagePadding: 20
            },
            480:{
                items:2,
                loop:true,
                stagePadding: 80
            },
            992:{
                items:4
            }
        }
    });
    //end of news carousel 


    //start of news carousel 
    $('.oneImageCarousel').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        navText: ["", ""],
        dots: false,
        items: 1
    });
    //end of news carousel 

    
    
   
});

$(window).on("scroll touchmove", function () {
    $('.header').toggleClass('active', $(document).scrollTop() > 0);
});