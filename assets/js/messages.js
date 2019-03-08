// var table = require('console.table');
$(document).ready(function () {
  $('tbody').empty();
  const btn = "<a id='close' style='width:10px;' class='waves-effect waves-light btn red'><i class='material-icons center'>content_cut</i>button</a>";
  let id;
  // Get all message from every guest
  // Get the data object from database
  $.get('/api/messages', function (data) {
  // Loop though object array for each record
    data.forEach(function (response) {
      $('tbody').append(
        '<tr><td>' +
          response.first_name +
          '</td><td>' +
          response.last_name +
          '</td><td>' +
          response.subject +
          '</td><td>' +
          response.body +
          '</td><td>' +
          response.id +
          '</td><td>' +
          response.email +
          '</td><td id="buttonID">' + btn + '</td></tr>'
      );
      id = response.id;
    })
  })
  $(document).on("click", "#buttonID", function() {
    console.log("Hello world!");
    $.ajax({
      method: "DELETE",
      url: "/api/messages/"+ id
    })
      .done(function( msg ) {
        alert( "Data Deleted: " + msg );
      });
  })
})