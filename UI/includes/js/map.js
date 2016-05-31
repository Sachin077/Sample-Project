
 $(document).ready(function() {
  var myCenter=new google.maps.LatLng(53, -1.33);
  var marker=new google.maps.Marker({
      position:myCenter
  });

  $('a[href="#map"]').click(function(e) {
            setTimeout(initialize, 1000);
        });

  function initialize() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {lat: 44.540, lng: -78.546},
          zoom: 8
        });
  };

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    	initialize();
  });
});
