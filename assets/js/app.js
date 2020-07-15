(function ($) {
     $(document).ready(function () {
          AOS.init({
               duration: 1000
          });

          $('.owl-carousel').owlCarousel({
               loop: false,
               margin: 13,
               nav: false,
               center: true,
               dots: true
          })

          $(window).scroll(function () {
               var amount = $(this).scrollTop();
               if (amount > 200 || amount < 300) {
                    $('.flower').attr('class', 'container-fluid flower');
               }
               setTimeout(() => {
                    $('.flower').remove();
               }, 3000);
          });
     });
})(jQuery);