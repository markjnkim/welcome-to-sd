$(document).ready(function () {
  $('.materialboxed').materialbox();
  // $('.button-collapse').sideNav({
  //     menuWidth: 300,
  //     edge: 'right',
  //     draggable: true
  // });

  $('p#grocery_list').hide();
  $('a#grocery').click(toggleList);


});
function toggleList() {
  $('p#grocery_list').slideToggle();
}


$('.head-link').click(function (e) {
  e.preventDefault();

  var goto = $(this).attr('href');

  var togo = $(goto)
  if (togo.length) {
    $('html, body').animate({
      scrollTop: $(goto).offset().top
    }, 800);
  }
});

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
