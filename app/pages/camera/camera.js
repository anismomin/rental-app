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
var ionic_native_1 = require('ionic-native');
var Page1 = (function () {
    function Page1(ngzone) {
    }
    Page1.prototype.takepic = function () {
        var _this = this;
        var options = {
            destinationType: 0,
            sourceType: 1,
            encodingType: 0,
            quality: 100,
            allowEdit: false,
            saveToPhotoAlbum: false
        };
        ionic_native_1.Camera.getPicture(options).then(function (data) {
            var imgdata = "data:image/jpeg;base64," + data;
            _this.image = imgdata;
        }, function (error) {
            alert(error);
        });
    };
    Page1 = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/page1/page1.html',
        }), 
        __metadata('design:paramtypes', [Object])
    ], Page1);
    return Page1;
}());
exports.Page1 = Page1;
