$( document ).ready(function() {


  $.urlParam = function(name)
  {
      var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      return results[1] || 0;
  }
  var search_string = $.urlParam('search');

});


  function init() {
     var map = new google.maps.Map(document.getElementById('googleMap'), {
       center: {
         lat: 51.508742, //latmapresult
         lng: -0.120850 //lngmapresult

       },
       zoom: 12
     });
};
