$(document).ready( () => {
  $('.materialboxed').materialbox();
  // $('.button-collapse').sideNav({
  //     menuWidth: 300,
  //     edge: 'right',
  //     draggable: true
  // });

  // Slide Grocery List Responsive to screen size break 800px
  $('div#grocery_list_s').hide();
  $('div#grocery_list_b').hide();
  $('a#grocery').click( () => {
    if ($(window).width() <= 800) {
      $('div#grocery_list_b').hide();
      $('div#grocery_list_s').slideToggle();
    } else {
      $('div#grocery_list_s').hide();
      $('div#grocery_list_b').slideToggle();
    }
  }
    
  );
  // Slide Tips List in policy.hbs
  $('#tip-list').hide();
  $('#tips').click( () => {
    $('#tip-list').slideToggle();
  });


});
 // Slide Tips List in policy.hbs
// function toggleTips() {
//   $('#tip-list').slideToggle();
// }


// function toggleList() {
//   if ($(window).width() <= 800) {
//     $('div#grocery_list_b').hide();
//     $('div#grocery_list_s').slideToggle();
//   } else {
//     $('div#grocery_list_s').hide();
//     $('div#grocery_list_b').slideToggle();
//   }
// }

// Nav bar link animation
$('.head-link').click( (e) => {
  e.preventDefault();

  var goto = $(this).attr('href');

  var togo = $(goto)
  if (togo.length) {
    $('html, body').animate({
      scrollTop: $(goto).offset().top
    }, 800);
  }
});
// Google Analytics
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-60673008-2', 'auto');
ga('send', 'pageview');


// // Initialize Firebase
// var config = {
//   apiKey: "AIzaSyCLj1tOhXfmkuTeYTGpWiJUCBCMggln6qU",
//   authDomain: "airbnb-sd.firebaseapp.com",
//   databaseURL: "https://airbnb-sd.firebaseio.com",
//   projectId: "airbnb-sd",
//   storageBucket: "airbnb-sd.appspot.com",
//   messagingSenderId: "672376233413"
// };
// firebase.initializeApp(config);


