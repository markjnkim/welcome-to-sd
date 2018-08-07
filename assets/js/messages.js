$(document).ready(function () {
  // Get all message from guest
  $('tbody').empty()
  $.get('/api/messages', function (data) {
    data.forEach(function(response) {
      $('tbody').append(
        '<tr><td>' +
          response.subject + 
          '</td><td>' +
          response.body +
          '</td><td' +
          response.subject +
          '</td><td>' +
          response.id +
          '</td><td>' +
          response.email +
          '</td><td>' +
          response.Author.first_name +
          '</td><td>' +
          response.Author.last_name +
          '</td></tr>'
      )
    })
  })
})
