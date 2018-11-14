import axios from 'axios';

const API_KEY = '51120a1852d3bb845834ebad87c9648e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const url = `${ROOT_URL}&q=san+diego,us`;

// export function getWeather(city='San+Diego') {
//   const request = axios.get(url);
//   console.log(request)
//   return request;
// }

// var table = require('console.table');
// $(document).ready( () => {
//   $('tbody').empty()
  
//   // Get all message from every guest
//   // Get the data object from database
//   const request = axios.get(url);
//   console.log(request)
// })
$(document).ready( () => {
  // $('tbody').empty()
  
  // Get all message from every guest
  // Get the data object from database
  // const request = axios.get(url);
  console.log('Hello');
})


//   $.get('/api/messages', function (data) {
//   // Loop through object array for each record
//     data.forEach(function (response) {
//       $('tbody').append(
//         '<tr><td>' +
//           response.first_name +
//           '</td><td>' +
//           response.last_name +
//           '</td><td>' +
//           response.subject +
//           '</td><td>' +
//           response.body +
//           '</td><td>' +
//           response.id +
//           '</td><td>' +
//           response.email +
//           '</td></tr>'
//       )
//     })
//   })
// })