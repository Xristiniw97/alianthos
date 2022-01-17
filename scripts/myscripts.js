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


    //start of ONE IMAGE carousel 
    $('.oneImageCarousel').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        navText: ["", ""],
        dots: false,
        items: 1
    });
    //end of ONE IMAGE carousel 

});

// START OF ACTIVE HEADER 
$(window).on("scroll touchmove", function () {
    $('.header').toggleClass('active', $(document).scrollTop() > 0);
});
// END OF ACTIVE HEADER 


// START VIDEO SLIDER 
$(document).ready(function() {    

    var linkVideo2 = $(".video-2");
    var linkVideo3 = $(".video-3");
    var linkVideo4 = $(".video-4");

    var video2 = $('#video-2');
    var video3 = $('#video-3');
    var video4 = $('#video-4');

    linkVideo2.mouseover(function(){
        video2.addClass('active');
    });

    linkVideo2.mouseleave(function(){
        video2.removeClass('active');
    });

    linkVideo3.mouseover(function(){
        video3.addClass('active');
    });

    linkVideo3.mouseleave(function(){
        video3.removeClass('active');
    });

    linkVideo4.mouseover(function(){
        video4.addClass('active');
    });

    linkVideo4.mouseleave(function(){
        video4.removeClass('active');
    });
});
// END VIDEO SLIDER 


// START MOBILE NAV 
$(document).ready(function() {  

    $("#menuToggle").click(function() {
            if ($("input[type=checkbox]").is(
              ":checked")) {               
                $(".mobile-nav").addClass("visible");
            } else {
                $(".mobile-nav").removeClass("visible");
            }
        }); 
} );
// END MOBILE NAV 


//START STICKY BOTTOM
$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".stickyBottom").removeClass("unvisible");
        $(".stickyBottom").addClass("visible");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".stickyBottom").removeClass("visible");
        $(".stickyBottom").addClass("unvisible");

    }
});
//END STICKY BOTTOM


//START  HOME VIDEO SLIDER 
// Targeting video element 
let clip = document.querySelector(".video-mini")

/* Applying mouseover event on video clip 
and then we call play() function to play 
the video when the mouse is over the video */
clip.addEventListener("mouseover", function (e) {
    clip.play();
});

/* Applying mouseout event on video clip 
and then we call pause() function to stop 
the video when the mouse is out the video */
clip.addEventListener("mouseout", function (e) {
    clip.pause();
});
//END HOME VIDEO SLIDER 
