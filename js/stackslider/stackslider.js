$(function(){
    var flexoptions = {
        top: {
            carousel:{
                animation: "slide",
                controlNav: false,
                directionNav: false, // maybe needed
                animationLoop: false,
                slideshow: false,
                itemWidth: 310,
                itemMargin: 0,
                asNavFor: '#top-images'
            },
            images:{
                animation: "fade",
                controlNav: false,
                directionNav: false,
                animationLoop: false,
                slideshow: false,
                sync: "#top-carousel",
                start: function(slider){
                    slider.currentSlide = -1
                    slider.flexAnimate(0);
                    slider.$preload = $(new Image());
                    slider.$preload.on('load',function(ev){
                        var n = slider.$preload.data('ndx');
                        $('.images img').eq(n).attr('src',this.src);
                    });
                },
                before: function(slider){
                    $('.display .preview *').fadeOut();
                },
                after: function(slider){
                    var n = slider.animatingTo;
                    var el = $('.carousel .slides>li').eq(n);
                    var img = $('.carousel .slides img').eq(n);
                    slider.$preload.attr('src',img.data('hires'));
                    slider.$preload.data('ndx',n);
                    $('.display .preview').empty().append(el.html());
                }
            }
        },
        simpleflex: {
            animation: "slide",
            controlNav: false,
            animationLoop: true,
            slideshow: false
        },
        carousel: {
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 230,
            itemMargin: 20,
        },
        stack: {
            animation: "slide",
            animationLoop: false,
            slideshow: false,
            start: function(slider){
                $('body').removeClass('loading');
                var $container = $(slider.context).parents('.stackslider');
                slider.stack = $container.find('.imgstack');
                if (slider.stack.length < 1) { return false; }
                if ($container.hasClass('slider02')) {
                    $container.find('.flex-control-paging').append('<li> |'+ slider.count + '</li>');
                };
                slider.stack.click(function(ev){
                    $container.find('.flex-next').click();
                })
                slider.stack.sort = function(next){
                    var c = slider.count;
                    var stackID = slider.stack.attr('id').split('-').pop();
                    for (var i = 0; i< c; i++){
                        var j = (i < next)?i+c:i;
                        $('#stack-'+stackID+'-img-'+i).css('z-index',(c+c-j));
                    }
                };
                slider.stack.sort(0);
            },
            before: function(slider){
                var l = slider.count;
                if (slider.stack.length < 1) { return false; }
                var stackID = slider.stack.attr('id').split('-').pop();
                var n = slider.animatingTo;
                var c = slider.currentSlide;
                var next = '#stack-'+stackID+'-img-'+n;
                var curr = '#stack-'+stackID+'-img-'+c;
                var anim = ((n == c+1)  )? curr: next;
                $(anim).data('elTF',$(anim).css('transform'));
                $(anim).addClass('out').removeClass('in').animate({
                    left: "-=120%"
                  }, 300, function() {
                    $('#stack-'+stackID+'-img-'+n).css('z-index',(3*l));
                    $(anim).removeClass('out').addClass('in');
                    $(anim).animate({
                        left: "+=120%"
                      }, 300, function() {
                        slider.stack.sort(n);
                        $(anim).css('transform',$(anim).data('elTF'))
                        // Animation complete.
                    });
                });
            }
        }
    }
    // initialize stacks.
    $('.stackslider').each(function(i,p){ 
        var stack = $(p).find('.imgstack').attr('id','stack-'+i);
        $(p).find('.slides>li').each(function(n,l){
            l.id = 'sl-'+i+'-el-'+n;
            $(l).data('elndx', n);
            var elimg = $(l).find('img.stacked').eq(0);
            var rnd = Math.random();
            var r = [
                Math.floor(rnd * 123)%20 -10,
                Math.floor(rnd * 200)%20 -10,
                Math.floor(rnd * 439)%20 -10
            ]
            var x = ['rotate(',r[0],'deg) translate(',r[1],'px, ',r[2],'px) scale(1.0)']
            elimg.appendTo(stack).css('transform',x.join('')).attr('id','stack-'+i+'-img-'+n);
//            console.log(n,stack,elimg);
        });
        $(p).find('.flexslider').flexslider(flexoptions.stack);
    });
    // initialize top. ()
    $('.topslider').each(function(i,p){
        $(p).height($(window).height());
        $('#scrolldown').click(function(){
            var body = $("html, body");
            body.animate({scrollTop:$(window).height()-80}, 1500, 'swing');
        });
        $(p).find('.images').empty().addClass('flexslider').append($('<ul class="slides" />'));
        $(p).find('.carousel img').each(function(n,l){
             var li = $('<li />').appendTo($(p).find('.images .slides'));
             $(l).clone().appendTo(li);
        });
        $(p).find('.carousel').attr('id','top-carousel').flexslider(flexoptions.top.carousel);
        $(p).find('.images').attr('id','top-images').flexslider(flexoptions.top.images);
    });
    // initialize caroussels.
    $('.bandslider').each(function(i,p){ 
        $(p).find('.flexslider').flexslider(flexoptions.carousel);
    });
    // initialize caroussels.
    $('.simpleflex').each(function(i,p){ 
        $(p).flexslider(flexoptions.simpleflex);
    });
});