$(document).ready(function() {  
  $('.desk_menu .click-top').click(function(e) {
    e.preventDefault();
    var topht = $('.head_wrap').outerHeight();
    var src = $(this).attr('href');    
    var scrltop = $(src).offset().top;
    $('html, body').animate({ scrollTop: scrltop - topht }, 1000);
  });
});

