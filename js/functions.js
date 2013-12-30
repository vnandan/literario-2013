$("#home").click(function(){$("#magazine").turn("page",1);});
$("#about").click(function(){$("#magazine").turn("page",2);});
$("#schedule").click(function(){$("#magazine").turn("page",4);});
$("#event1").click(function(){$("#magazine").turn("page",6);});
$("#event2").click(function(){$("#magazine").turn("page",8);});
$("#event3").click(function(){$("#magazine").turn("page",10);});
$("#event4").click(function(){$("#magazine").turn("page",12);});
$("#event5").click(function(){$("#magazine").turn("page",14);});
$("#event6").click(function(){$("#magazine").turn("page",16);});
$("#event7").click(function(){$("#magazine").turn("page",18);});
$("#event8").click(function(){$("#magazine").turn("page",20);});
$("#event9").click(function(){$("#magazine").turn("page",22);});
$("#team").click(function(){$("#magazine").turn("page",24);});

$.fn.animateRotate = function(startAngle, endAngle, duration, easing, complete){
    return this.each(function(){
        var elem = $(this);

        $({deg: startAngle}).animate({deg: endAngle}, {
            duration: duration,
            easing: easing,
            step: function(now){
                elem.css({
                  '-moz-transform':'rotate('+now+'deg)',
                  '-webkit-transform':'rotate('+now+'deg)',
                  '-o-transform':'rotate('+now+'deg)',
                  '-ms-transform':'rotate('+now+'deg)',
                  'transform':'rotate('+now+'deg)'
                });
            },
            complete: complete || $.noop
        });
    });
};
$('#trigger').click(function(){$('#trigger').animateRotate(0,-180,700);});
