$('flashMessage').hide()
/* click function mention in readme */
$('.main-img').click(function() {
  
    $("#flashMessage")
      .slideDown(1000)
      .delay(3000)
      .slideUp();
  });