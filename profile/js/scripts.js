//Check if website is viewed on a mobile & tablet
(function(a){($.browser=$.browser||{}).mobile=/(android|bb\d+|meego).+mobile|android|ipad|playbook|silk|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);


jQuery(document).ready(function($) {
    "use strict";

//Page Preloader
    $(window).load(function() {
        $(".mask").delay(1000).fadeOut("slow");
        parallaxInit();
    });

//Nice Scroll
    $("html").niceScroll();

//Parallax    	
    function parallaxInit() {
        $('#home').parallax("30%", 0.1);
        $('#intro').parallax("30%", 0.1);
        $('#wprocess').parallax("30%", 0.1);
        $('#hire').parallax("30%", 0.1);
    }

//Navigations
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    $('#navs a').click(function(event) {
        event.preventDefault();

        var url = $(this).attr('href');

        $("#navs a").each(function(index) {
            $(this).attr('class', '');
        });
        $(this).attr('class', 'active');
    });

    $('.nav a').click(function(event) {
        event.preventDefault();

        var url = $(this).attr('href');

        $(".nav a").each(function(index) {
            $(this).attr('class', '');
        });
        $(this).attr('class', 'active');
    });



// Appear Animations
    $('*').each(function(){
        if(jQuery(this).attr('data-animation')) {
            var $animationName = jQuery(this).attr('data-animation');
            jQuery(this).appear(function() {
                jQuery(this).addClass('animated').addClass($animationName);
            });
        }
    });

//tooltips
    $(document).ready(function ()
    {
        $( 'body' ).tooltip({
            selector: "a[data-toggle=tooltip]"
        });
    });

//Animated Progress Bars
    $('.skill li').each(function () {
        $(this).appear(function() {
            $(this).animate({opacity:1,left:"0px"},1200);
            var b = $(this).find("span").attr("data-width");
            $(this).find("span").animate({
                width: b + "%"
            }, 1700, "easeOutCirc");
        });
    });

//Animated Counters
    $('.count').each(function () {
        $(".total-numbers .sum").appear(function() {
            var counter = $(this).html();
            $(this).countTo({
                from: 0,
                to: counter,
                speed: 2000,
                refreshInterval: 60
            });
        });
    });


//Responsive slide For blog
    $("#blog-carousel").owlCarousel({
        autoPlay: 3000,
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });

//Portfolio Isotop
    $(window).load(function() {
        $(function(){

            var $container = $('.portfolio-container');


            $container.isotope({
                itemSelector : '.mt',
                layoutMode : 'masonry'

            });

            var $optionSets = $('#options .option-set'),
                $optionLinks = $optionSets.find('a');

            $optionLinks.click(function(){
                var $this = $(this);
                // don't proceed if already selected
                if ( $this.hasClass('selected') ) {
                    return false;
                }
                var $optionSet = $this.parents('.option-set');
                $optionSet.find('.selected').removeClass('selected');
                $this.addClass('selected');

                // make option object dynamically, i.e. { filter: '.my-filter-class' }
                var options = {},
                    key = $optionSet.attr('data-option-key'),
                    value = $this.attr('data-option-value');
                // parse 'false' as false boolean
                value = value === 'false' ? false : value;
                options[ key ] = value;
                if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
                    // changes in layout modes need extra logic
                    changeLayoutMode( $this, options )
                } else {
                    // otherwise, apply new options
                    $container.isotope( options );
                }

                return false;
            });
        });

    });

    //Masonry Blog
    $(window).load(function(){
        var $container = $('.blog-post-holder');
        $container.isotope({
            masonry: {
            },
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
    });

    //Google Maps
    $('#gmap').gmap3({
        marker:{address:"Sunnyvale, California", options:{icon: "img/location1.png"}},
        map:{
            options:{
                zoom: 14
            }
        }
    });

    jQuery(document).ready(function($) {


        //Sticky Navigation

        $(".main-nav").sticky({ topSpacing: 0 });

        //Responsive Nav
        $('.nav a.colapse-menu1').click(function () { $(".navbar-collapse").collapse("hide") });
        $('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });

        twitterFetcher.fetch({
            "id": '537532726442594304',
            "domId": 'twitter_feed',
            "maxTweets": 1,
            "enableLinks": true,
            "showUser": false,
            "showTime": false,
            "showInteraction": false
        });


    });

});	





