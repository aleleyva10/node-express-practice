$(document).ready(function() {
  $.ajax({
    type: 'GET',
    url: "/kittens",
    success: function(response) {
      console.log('YES', response);
    }
  });

  $.ajax({
    type: 'GET',
    url: "/puppys",
    success: function(response) {
      console.log('YES', response);
    }
  });
});
