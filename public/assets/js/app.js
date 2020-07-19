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

          // $(window).scroll(function () {
          //      var amount = $(this).scrollTop();
          //      if (amount > 200 || amount < 300) {
          //           $('.flower').attr('class', 'container-fluid flower');
          //      }
          //      setTimeout(() => {
          //           $('.flower').remove();
          //      }, 3000);
          // });

          var firebaseConfig = {
               apiKey: "AIzaSyCqna-T2azTQepPQH9dnLe1xPNYk6Cv9Xc",
               authDomain: "slider-49bf4.firebaseapp.com",
               databaseURL: "https://slider-49bf4.firebaseio.com/",
               projectId: "slider-49bf4",
               storageBucket: "slider-49bf4.appspot.com",
               messagingSenderId: "594851232029",
               appId: "1:594851232029:web:1907df90dfec548bc509f4",
               measurementId: "G-2LHNWF76TD"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
          var database = firebase.database();
          //password
          $('.pw').hide();
          $('.slider-range').on('change', function (e) {
               e.preventDefault();
               $('.pw').show();
               $('.confirm').click(function (e) {
                    e.preventDefault();
                    var pw = $('.pw-data').val();
                    $('.pw-data').val('');
                    if (pw == 246022) {
                         var data = $('.slider-range').val();
                         //update value...
                         firebase.database().ref().set({
                              'object': data
                         });
                         $('.pw').hide();
                    } else {
                         dbRef.on('value', (snap) => {
                              $('.slider-range').val(snap.val());
                              $('.percent').text(snap.val());
                         });
                         $('.pw').hide();
                    }
               })

          });

          var dbRef = database.ref().child('object');

          //get value and chage ui
          dbRef.on('value', (snap) => {
               $('.slider-range').val(snap.val());
               $('.percent').text(snap.val());
          });

     });
})(jQuery);