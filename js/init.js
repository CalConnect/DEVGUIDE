(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.carousel').carousel();

    $( ".data-expander a" ).click(function(evt) {
        evt.preventDefault();
        var expandParent = $(this).parent();
        var expandChild = expandParent.find('.data-expander-child');
        var expandChildHeight = expandChild.height();

        $( ".data-expander" ).each(function( index ) {
            $(this).height(28);
        });
        
        expandParent.height(expandChildHeight + 34);
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
