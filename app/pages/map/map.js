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
var Page3 = (function () {
    function Page3() {
        this.map = null;
        this.loadMap();
    }
    Page3.prototype.loadMap = function () {
        //let options = { timeout: 10000, enableHighAccuracy: true };
        //Geolocation.getCurrentPosition(options).then((position) => {
        //let latLng = new google.maps.latLng(position.coords.latitude, position.coords.longitude);
        //let latLng = new google.maps.LatLng(-34.9290, 138.6010);
        // let mapOptions = {
        //  center: latLng,
        //  zoom: 15,
        //  mapTypeId: google.maps.MapTypeId.ROADMAP
        // };
        // this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        //});
    };
    Page3 = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/page3/page3.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Page3);
    return Page3;
}());
exports.Page3 = Page3;
