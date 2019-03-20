$(document).ready(function () {
  $('tbody').empty();

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
        `<td><div data-id='${response.id}' class='btn-small button-size'>` + "<i class='material-icons center'>clear</i></div>" + "</td></tr>"
      );
    })
  })

  // Delete Button Functionality
  $(document).on("click", ".button-size", function () {
    const id = $(this).attr("data-id");

    $.ajax({
      method: "DELETE",
      url: `/api/messages/${id}`
    })
    .then( res => {
      console.log(res);
      location.reload();
    })
  })
})