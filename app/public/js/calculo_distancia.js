localStorage.clear();

class Distancias{
	constructor(userLat, userLong, placeLat, placeLong){
		this.userLat = userLat;
		this.userLong = userLong;
		this.placeLat = placeLat;
		this.placeLong = placeLong;
		this.raio = 6200;
		this.pontos_proximos  = localStorage.getItem('pontos_proximos');
		this.pontos_proximos =  (this.pontos_proximos) ? JSON.parse(this.pontos_proximos) : [];
	}
	DistanciaLat(){
		return  (this.placeLat - this.userLat) * Math.PI / 180
	}
	DistanciasLon(){
		return (this.placeLong - this.userLong) * Math.PI / 180;
	}
	DistanciasA(){
		return  Math.sin(this.DistanciaLat() / 2) * Math.sin(this.DistanciaLat() / 2) + Math.cos(this.userLat * Math.PI / 180) * Math.cos(this.placeLat * Math.PI / 180) * Math.sin(this.DistanciasLon() / 2) * Math.sin(this.DistanciasLon() / 2);;
	}
	DistanciasC(){
		return 2 * Math.atan2(Math.sqrt(this.DistanciasA()), Math.sqrt(1 - this.DistanciasA()))
	}
	DistanciaFinal(){
		return this.raio * this.DistanciasC();	
	}
	comparar_distancias(ponto){
		var cont = 0 ;
		if(this.DistanciaFinal() <0.5){
			console.log(cont++)
			this.pontos_proximos.push(ponto);
			localStorage.setItem('pontos_proximos',JSON.stringify(this.pontos_proximos));
		}else{
			this.pontos_proximos.push(ponto);
			localStorage.setItem('pontos_proximos',JSON.stringify(this.pontos_proximos));
		}
	}
	ordenar_distancias(){
		var temp;
		for (var i = 0; i < this.pontos_proximos.length; i++) {
			for (var c = 0; c < this.pontos_proximos.length; c++) {
				if(this.pontos_proximos[i].lat < this.pontos_proximos[c].lat){
					temp = this.pontos_proximos[i];
					this.pontos_proximos[i] = this.pontos_proximos[c];
					this.pontos_proximos[c] = temp;		
				}	
			}
		}
		console.log(this.pontos_proximos);
		localStorage.setItem('pontos_proximos',JSON.stringify(this.pontos_proximos));
	}
}
function rota() {
	  map = new google.maps.Map(document.getElementById("mapas"), mapProp);
	  var directionsDisplay = new google.maps.DirectionsRenderer({
	    map: map
	  });

	  	console.log(distance.pontos_proximos[0])

	  var request = {
	    destination: distance.pontos_proximos[0],
	    origin: {
	      lat: posi.lat,
	      lng: posi.lng
	    },
	    travelMode: 'WALKING'
	  };

	  CalculaDistancia(request.destination, request.origin)

	  var directionsService = new google.maps.DirectionsService();
	  directionsService.route(request, function(response, status) {
	    if (status == 'OK') {
	      directionsDisplay.setDirections(response);
	    }
	  });

	  function CalculaDistancia(origem, destino) {
	    var service = new google.maps.DistanceMatrixService();
	    service.getDistanceMatrix({
	      origins: [origem],
	      destinations: [destino],
	      travelMode: google.maps.TravelMode.DRIVING
	    }, callback);
	  }

	  function callback(response, status) {
	    if (status == google.maps.DistanceMatrixStatus.OK) {
	      document.querySelector("#dados").innerHTML = "Distância:" + response.rows[0].elements[0].distance.text + ' chegada até proximo ponto em ' + response.rows[0].elements[0].duration.text;
	    }
	  }
	} 
