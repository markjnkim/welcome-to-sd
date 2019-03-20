// var table = require('console.table');
$(document).ready(function () {
  $('tbody').empty();
  // const btn = $("<div>");
  // const a = $("<a class='waves-effect waves-light btn red button-size'></a>");
  // const i = $("<i class='material-icons center'>content_cut</i>");
  // btn.append(a);
  // a.append(i);

  // let id;
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
        `</td>` +
        `<td><a data-id='${response.id}' class='waves-effect waves-light btn btn-small red button-size'>` + "<i class='material-icons center'>clear</i></a>" + "</td></tr>"
      );
      // id = response.id;
      // console.log(id);
    })
  })

  // Delete Button Functionality
  $(document).on("click", ".button-size", function () {
    // console.log($(this));
    console.log(this)
    const id = $(this).attr("data-id");
    console.log(id)

    $.ajax({
      method: "DELETE",
      url: `/api/messages/${id}`
    })
    .then(function(res) {
      console.log(res)
      location.reload();
    })
  })
})