function initMap(){
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 10, 
		center:{lat:-33.4430, lng: -70.6619},
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl:false
	});

	new AutocompleteDerectionsHandler(map);

	function buscar(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
		}
	}
	document.getElementById("encuentrame").addEventListener("click", buscar);

	var latitud,longitud;

	
	var funcionExito = function(posicion){
		latitud = posicion.coords.latitude;
		longitud = posicion.coords.longitude;

		
		var miUbicacion = new google.maps.Marker({
			position: {lat:latitud, lng:longitud},
			animation: google.maps.Animation.DROP,
			map: map,
			icon:"../img/bici.png"
		});

		map.setZoom(17);
		map.setCenter({lat:latitud, lng:longitud});
	}

	var funcionError = function(){
		alert(":( Lo sentimos, pero no podemos encontrar tu ubicación. Vuelve a intentarlo");
	}
}
/*ruta????
/TRAZANDO RUTA
function AutocompleteDirectionsHandler(map) {
  this.map = map;
  this.originPlaceId = null;
  this.destinationPlaceId = null;
  this.travelMode = 'WALKING';
  var originInput = document.getElementById('origen');
  var destinationInput = document.getElementById('destino');
  var modeSelector = document.getElementById('mode-selector');
  this.directionsService = new google.maps.DirectionsService;
  this.directionsDisplay = new google.maps.DirectionsRenderer;
  this.directionsDisplay.setMap(map);

  var originAutocomplete = new google.maps.places.Autocomplete(
    originInput, {placeIdOnly: true});
  var destinationAutocomplete = new google.maps.places.Autocomplete(
    destinationInput, {placeIdOnly: true});

  this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
  this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');

  this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
  this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(destinationInput);
  this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
}


AutocompleteDirectionsHandler.prototype.setupClickListener = function(id, mode) {
  var radioButton = document.getElementById(id);
  var me = this;
  radioButton.addEventListener('click', function() {
    me.travelMode = mode;
    me.route();
  });
};

AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function(autocomplete, mode) {
  var me = this;
  autocomplete.bindTo('bounds', this.map);
  autocomplete.addListener('place_changed', function() {
    var place = autocomplete.getPlace();
      if (!place.place_id) {
        window.alert("Seleccione una opción de la lista ");
        return;
      }
      if (mode === 'ORIG') {
        me.originPlaceId = place.place_id;
      } else {
         me.destinationPlaceId = place.place_id;
      }
     me.route();
  });

};

AutocompleteDirectionsHandler.prototype.route = function() {
  if (!this.originPlaceId || !this.destinationPlaceId) {
    return;
  }
  var me = this;

  this.directionsService.route({
  origin: {'placeId': this.originPlaceId},
  destination: {'placeId': this.destinationPlaceId},
  travelMode: this.travelMode
  }, function(response, status) {
      if (status === 'OK') {
        document.getElementById("ruta").addEventListener("click", function(){
          if (document.getElementById('origen').value == "") {
            alert("Debes ingresar una ruta")
          }else{
             me.directionsDisplay.setDirections(response);
            document.getElementById("origen").value = "";
            document.getElementById("destino").value = "";
          }
        })
      } else {
         window.alert('Se ha producido un error en la solicitud de ' + status);
      }
    });
};*/