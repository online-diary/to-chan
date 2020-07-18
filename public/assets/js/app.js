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

          /**
                    var firebaseConfig = {
                         apiKey: "AIzaSyCqna-T2azTQepPQH9dnLe1xPNYk6Cv9Xc",
                         authDomain: "slider-49bf4.firebaseapp.com",
                         databaseURL: "https://slider-49bf4.firebaseio.com",
                         projectId: "slider-49bf4",
                         // storageBucket: "slider-49bf4.appspot.com",
                         storageBucket: "bucket.appspot.com",
                         messagingSenderId: "594851232029",
                         appId: "1:594851232029:web:1907df90dfec548bc509f4",
                         measurementId: "G-2LHNWF76TD"
                    };
                    // Initialize Firebase
                    firebase.initializeApp(firebaseConfig);
                    const provider = new firebase.auth.GoogleAuthProvider();

                    // Sign in
                    function signIn() {
                         firebase.auth().signInWithPopup(provider)
                    }

                    //Sign out
                    function signOut() {
                         // Sign out of Firebase.
                         firebase.auth().signOut();
                    }

                    //Get User Name
                    function getUserName() {
                         return firebase.auth().currentUser.displayName;
                    }

                    //Auth State Change
                    function initFirebaseAuth() {
                         // Listen to auth state changes.
                         firebase.auth().onAuthStateChanged(authStateObserver);
                    }

                    // Auth Controller
                    function authStateObserver(user) {
                         if (user) { // User is signed in!
                              var userName = getUserName();
                              $('.user-name').text(userName);
                              $('.login').hide();
                              $('.logout').show();
                         } else {
                              $('.user-name').text('');
                              $('.login').show();
                              $('.logout').hide();
                         }
                    }
                    initFirebaseAuth();

                    //Save Message to database
                    function saveMessage(messageText) {
                         // Add a new message entry to the Firebase database.
                         return firebase.firestore().collection('messages').add({
                              name: getUserName(),
                              text: messageText,
                              timestamp: firebase.firestore.FieldValue.serverTimestamp()
                         }).catch(function (error) {
                              console.error('Error writing new message to Firebase Database', error);
                         });
                    }

                    // Load Message
                    function loadMessages() {
                         // Create the query to load the last 12 messages and listen for new ones.
                         var query = firebase.firestore().collection('messages').orderBy('timestamp', 'desc').limit(1);

                         // Start listening to the query.
                         query.onSnapshot(function (snapshot) {
                              snapshot.docChanges().forEach(function (change) {
                                   if (change.type === 'removed') {
                                        deleteMessage(change.doc.id);
                                   } else {
                                        var message = change.doc.data();
                                        alert(message);
                                        // displayMessage(change.doc.id, message.timestamp, message.name,
                                        //      message.text);
                                   }
                              });
                         });
                    }

                    function displayMessage(id, timestamp, name, text) {
                         // alert(text);
                         // var p = $('<p>');
                         // p.text(text);
                         // $('.message-container').append(p);
                    }

                    // Action Buttons
                    $('.login').click(function (e) {
                         e.preventDefault();
                         signIn();
                    });
                    $('.logout').click(function (e) {
                         e.preventDefault();
                         signOut();
                    });
          */
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
          $('.input-data').on('change', function (e) {
               e.preventDefault();
               var data = $('.input-data').val();
               firebase.database().ref().set({
                    'object': data
               });
          });
          var dbRef = database.ref().child('object');
          dbRef.on('value', (snap) => {
               rangeUiChange(snap);
          });

          function rangeUiChange(snap) {
               $('.input-data').val(snap.val());
               console.log(snap.val());
          }

     });
})(jQuery);