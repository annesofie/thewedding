$('#menubar ul li a').on('click',function(event){
    var $anchor = $(this);
    $('html, body').animate({
      scrollTop: $($anchor.attr('href')).offset().top + "px"
    }, 1500);
    event.preventDefault();
 });