$( document ).ready(function() {
    $("#search_button").click(function(){
      var search_string = $("#search_bar").val();
      // pass string to api
      var base = window.location.pathname;

      base = base.slice(0, -10)


      var url = base+"resultspage.html?search="+search_string;
      $(location).attr('href',url);
    });
  });
  // Create the search box and automatic search
          var input = document.getElementById('search_bar');
          var searchBox = new google.maps.places.SearchBox(input);
          map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var places = search_bar.getPlaces();
  var bounds = new google.maps.LatLngBounds();
  var i, place;
  for (i = 0; place = places[i]; i++) {
    (function(place) {
    //  var marker = new google.maps.Marker({
    var markers = [];
            // Listen for the event fired when the user selects a prediction and retrieve
            // more details for that place.
            searchBox.addListener('places_changed', function() {
              var places = searchBox.getPlaces();

              if (places.length == 0) {
                return;
              }
        position: place.geometry.location
      });
      marker.bindTo('map', search_bar, 'map');
      google.maps.event.addListener(marker, 'map_changed', function() {
        if (!this.getMap()) {
          this.unbindAll();
        }
      });
      bounds.extend(place.geometry.location);


    }(place));

  }
  map.fitBounds(bounds);
  search_bar.set('map', map);
  map.setZoom(Math.min(map.getZoom(),12));


  //google.maps.event.addDomListener(window, 'load', init);
