$(document).ready(function () {
  $('#submit').on('click', function (e) {
    e.preventDefault()

    var $first_name = $('#first_name')
    var $last_name = $('#last_name')
    var $body = $('#text_area')
    var $subject = $('#message_sub')
    var $email = $('#email')
    // Create new author from inputs
    // var newAuthor = {
    //   first_name: $first_name.val().trim(),
    //   last_name: $last_name.val().trim()
    // }
    // Create new message from inputs
    var newMessage = {
      body: $body.val().trim(),
      subject: $subject.val().trim(),
      email: $email.val().trim(),
      first_name: $first_name.val().trim(),
      last_name: $last_name.val().trim()
    }

    // Create new entry in DB
    // $.post('/api/authors', newAuthor).then(function () {})

    $.post('/api/messages', newMessage).then(function () {
      alert('Thank you for your message!')
    })

    $first_name.val('')
    $last_name.val('')
    $body.val('')
    $subject.val('')
    $email.val('')

    // // $(document).on("click", "#send_message", handleSend);

    // $("#send_message").on("click", handleSend);
    // Getting the initial list of Guests
    // getAuthors();

    // Function to handle what happens when the send button is submitted
    function handleSend (event) {
      event.preventDefault()
      alert('click event triggered - handleSend')

      // Don't do anything if the name fields haven't been entered
      if (!first_name.val().trim().trim() && !last_name.val().trim().trim()) {
        return
      }
      upsertAuthor({
        first_name: first_name.val().trim(),
        last_name: last_name.val().trim()
      })
    }
    // AJAX call creating Author, persists browser data
    function upsertAuthor (authorData) {
      $.post('api/authors', authorData).then(function () {
        console.log(authorData)
        alert(authorData)
        alert('Your entry has been delivered')
      })
    }
  })
})
