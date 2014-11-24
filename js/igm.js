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
   $(function(){
    
    // Enabling Popover Example 1 - HTML (content and title from html tags of element)
    $("[data-toggle=popover]").popover();
    $("#popover-share").popover({
        html : true, 
        content: function() {
          return $('#popover-share-content').html();
        }
    });

});

  });
