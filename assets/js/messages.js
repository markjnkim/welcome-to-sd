// var table = require('console.table');
$(document).ready(function () {
  // Get all message from every guest
  $('tbody').empty()
  // \Get the data object from database
  
  $.get('/api/messages', function (data) {
console.log(data);
  // Loop trhough object array for each record
    data.forEach(function (response) {
      $('tbody').append(
        '<tr><td>' +
          response.Author.first_name +
          '</td><td>' +
          response.Author.last_name +
          '</td><td>' +
          response.subject +
          '</td><td>' +
          response.body +
          '</td><td>' +
          response.AuthorId +
          '</td><td>' +
          response.id +
          '</td><td>' +
          response.email +
          '</td></tr>'
      )
    })
  })
})
