 $(document).ready(function () {
    // Ansicht der Labels als aktive Checkbox

     $("label").click(function() {
       $(this).toggleClass('active');
    });
     $('.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
            event.preventDefault(); 
            event.stopPropagation(); 
            $(this).parent().siblings().removeClass('open');
            $(this).parent().toggleClass('open');
        });
    // Accordion aktive Klasse

    $(".panel-heading h4").click(function(e) {
        if( $(this).parent().parent().parent().hasClass("active") ) {
            $(this).parent().parent().parent().removeClass("active")
        } else {
            $(this).parent().parent().parent().siblings().removeClass("active") 
            $(this).parent().parent().parent().addClass("active");
        }
  });
   $(function(){    
    //  Popover- HTML (content and title from html tags of element)
    $("[data-toggle=popover]").popover();
    $("#popover-share").popover({
        html : true, 
        content: function() {
          return $('#popover-share-content').html();
        }
    });

});

  });
