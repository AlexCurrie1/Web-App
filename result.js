
$( document ).ready(function() {


  $.urlParam = function(name)
  {
      var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      return results[1] || 0;
  }
  var search_string = $.urlParam('search');


});

  function init() {
    //var lat_long = https://maps.googleapis.com/maps/api/geocode/json?address=search_string&key=AIzaSyBxgZkKr24yAiOG5ohvLAdWytKXmA8PZxI

    var map = new google.maps.Map(document.getElementById('googleMap'), {
      center: {
      lat: 51.508742,
      lng: -0.120850
     },
      zoom: 12
     });
};
