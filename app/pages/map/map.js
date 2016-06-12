"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_angular_1 = require('ionic-angular');
var core_1 = require('angular2-google-maps/core');
var Map = (function () {
    function Map() {
        this.zoom = 15;
        this.lat = -37.7863713;
        this.lng = 175.2796333;
        this.markers = [
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
        this.loadMap();
    }
    Map.prototype.loadMap = function () {
        var _this = this;
        var options = { timeout: 10000, enableHighAccuracy: true };
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.lat = position.coords.latitude;
            _this.lng = position.coords.longitude;
            var pointer = {
                lat: _this.lat,
                lng: _this.lng,
                draggable: false,
                icon: 'img/logo.png'
            };
            _this.markers.push(pointer);
        }, function (error) {
            console.log(error);
        }, options);
    };
    Map.prototype.addMarker = function () {
        var _this = this;
        var options = { timeout: 10000, enableHighAccuracy: true };
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.lat = position.coords.latitude;
            _this.lng = position.coords.longitude;
            var pointer = {
                lat: _this.lat,
                lng: _this.lng,
                draggable: false,
                icon: 'img/logo.png'
            };
            _this.markers.push(pointer);
        }, function (error) {
            console.log(error);
        }, options);
        // let content = "<h4>Information!</h4>";
        // this.addInfoWindow(marker, content);
    };
    Map.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    Map = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/map/map.html',
            directives: [core_1.ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
            providers: [core_1.ANGULAR2_GOOGLE_MAPS_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], Map);
    return Map;
}());
exports.Map = Map;
