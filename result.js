
$( document ).ready(function() {
  $.urlParam = function(name)
  {
      var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      return results[1] || 0;
  }
  var search_string = $.urlParam('search');

  function myMap() {
  var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:9,
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }
});
