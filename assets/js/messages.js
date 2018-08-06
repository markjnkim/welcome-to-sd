table = require("console.log");

$(document).ready( function() {
// Get all message from guest
  $.get("/api/messages/all", function(data) {
    res.send(data);
    console.table(data);
  })


});