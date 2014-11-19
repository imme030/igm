 $(document).ready(function () {
    // Ansicht der Labels als aktive Checkbox

     $("label").click(function() {
       $(this).toggleClass('active');
    });
     $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
            event.preventDefault(); 
            event.stopPropagation(); 
            $(this).parent().siblings().removeClass('open');
            $(this).parent().toggleClass('open');
        });
  });
