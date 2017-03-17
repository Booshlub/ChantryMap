(function() {
	var map = new google.maps.Map(document.querySelector('.map-wrapper')),
		preloader = document.querySelector('.preload-wrapper'),

		// import the geocode API
		geocoder = new google.maps.Geocoder(),
		geocodeButton = document.querySelector('.geocode'),

		// directions display
		directionsService = new google.maps.DirectionsService(),
		directionsDisplay,
		locations = [],
		marker;

	function initMap(position) {
		
		locations[0] = { lat: position.coords.latitude, lng: position.coords.longitude };

		directionsDisplay = new google.maps.DirectionsRenderer();
		directionsDisplay.setMap(map);

		map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
		map.setZoom(14);

		marker = new google.maps.Marker({
			position: { lat: position.coords.latitude, lng: position.coords.longitude },
			map: map,
			title: "Hello world!",
			animation:google.maps.Animation.BOUNCE,
		});

		codeAddress();
	}

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(initMap, handleError);
	} else {
		console.log('we were on a break!');
	}

	function handleError() {
		console.log('something went wrong');
	}

	function codeAddress() {
		var address = "86 Saugeen St, Southampton, ON";

		geocoder.geocode({ 'address' : address }, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				locations[1] = { lat: results[0].geometry.location.lat(),
									lng: results[0].geometry.location.lng()
								};
				map.setCenter(results[0].geometry.location);

				if (marker) {
					marker.setMap(null);

					marker = new google.maps.Marker({
						map: map,
						position: results[0].geometry.location
					});

					calcRoute(results[0].geometry.location);
					calcDistance(results[0].geometry.location);
					
				} 			

				else {
					console.log('Geocode was not successful for the following reason: ', status);
				}
			}
		});
	}

	function calcRoute(codedLoc) {
		var request = {
			origin: locations[0],
			destination: locations[1],
			travelMode: 'DRIVING'
		};

		directionsService.route(request, function(response, status) {
			if (status == 'OK') {
				directionsDisplay.setDirections(response);
			}
		});
	}
	
	function calcDistance(codedLoc)
	{
		console.log("calc distance entered!");
		var service = new google.maps.DistanceMatrixService;
        service.getDistanceMatrix({
          origins: [locations[0]],
          destinations: [locations[1]],
          travelMode: 'DRIVING',
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false
        }, function(response, status) {
          if (status !== 'OK') {
            alert('Error was: ' + status);
          } else {
            var originList = response.originAddresses;
            var destinationList = response.destinationAddresses;
            var outputDiv = document.querySelector('#distance');
            outputDiv.innerHTML = '';

            for (var i = 0; i < originList.length; i++) {
              var results = response.rows[i].elements;
              for (var j = 0; j < results.length; j++) {
                outputDiv.innerHTML += originList[i] + ' to ' + destinationList[j] +
                    ': ' + results[j].distance.text + ' in ' +
                    results[j].duration.text + '<br>';
              }
            }
          }
        });	
	}

})();