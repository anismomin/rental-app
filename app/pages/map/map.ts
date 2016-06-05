import {Page, Platform} from 'ionic-angular';
import {MapsAPILoader, NoOpMapsAPILoader, MouseEvent,
	ANGULAR2_GOOGLE_MAPS_PROVIDERS,
	ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
import * as mapTypes from 'angular2-google-maps/services/google-maps-types';
import {Geolocation} from 'ionic-native';

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
	icon?: string;
}

@Page({
  templateUrl: 'build/pages/map/map.html',
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
  providers: [ANGULAR2_GOOGLE_MAPS_PROVIDERS]
})
export class Map {
	
	zoom: number = 15;
	lat: number = -37.7863713;
    lng: number = 175.2796333;

	constructor() {
		this.loadMap();
	}

	loadMap() {

		let options = { timeout: 10000, enableHighAccuracy: true };

		navigator.geolocation.getCurrentPosition(

			(position) => {

				this.lat = position.coords.latitude;
				this.lng = position.coords.longitude;

				let pointer : marker  = {
					lat: this.lat,
					lng: this.lng,
					draggable: false,
					icon: 'img/logo.png'
				};

				this.markers.push(pointer);
				
			},

			(error) => {
				console.log(error);
			}, options

		);

	}

	addMarker() {

		let options = { timeout: 10000, enableHighAccuracy: true };

		navigator.geolocation.getCurrentPosition(

			(position) => {

				this.lat = position.coords.latitude;
				this.lng = position.coords.longitude;

				let pointer: marker = {
					lat: this.lat,
					lng: this.lng,
					draggable: false,
					icon: 'img/logo.png'
				};

				this.markers.push(pointer);

			},

			(error) => {
				console.log(error);
			}, options

		);
		// let content = "<h4>Information!</h4>";

		// this.addInfoWindow(marker, content);

	}

	clickedMarker(label: string, index: number) {
		console.log(`clicked the marker: ${label || index}`)
	}

	markers : marker[] = [
		{
			lat: -17.7863713,
			lng: 105.2796333,
			draggable: false,
			icon: 'img/logo.png'
		},
		{
			lat: -87.8253519,
			lng: -175.30493468,
			draggable: false,
			icon: 'img/logo.png'
		}
	];
}
