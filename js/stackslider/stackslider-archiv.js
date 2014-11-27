$(function(){
    // initialize stack.
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
    });
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        slideshow: false,
        start: function(slider){
            $('body').removeClass('loading');
            var $container = $(slider.context).parents('.stackslider');
            slider.stack = $container.find('.imgstack');
            if (slider.stack.length < 1) { return false; }
            slider.stack.click(function(ev){
                $('.flex-next').click();
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
            // next: remove css transition.
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
    });
});