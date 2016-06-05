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
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
//Grab everything with import 'rxjs/Rx';
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/delay');
require('rxjs/add/operator/retry');
require('rxjs/add/operator/timeout');
var postItem = (function () {
    function postItem() {
    }
    return postItem;
}());
exports.postItem = postItem;
var PostService = (function () {
    function PostService(http) {
        this.http = http;
        this.ApiUrl = 'http://localhost:3333';
        this.isLoggedin = false;
        this.AuthToken = null;
        var ads = localStorage.getItem('ads');
        if (ads) {
            this.ads = JSON.parse(ads);
        }
        else {
            this.ads = [];
        }
    }
    PostService.prototype.useCredentials = function (token) {
        this.isLoggedin = true;
        this.AuthToken = token;
    };
    PostService.prototype.loadUserCredentials = function () {
        var token = localStorage.getItem('classified_jwt');
        this.useCredentials(token);
    };
    PostService.prototype.postAd = function (post) {
        this.loadUserCredentials();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        //headers.append('Authorization', 'Bearer ' +this.AuthToken);
        return this.http.post(this.ApiUrl + '/addNewPost', JSON.stringify(post), { headers: headers })
            .map(function (res) { return res.json(); })
            .delay(3000);
        /*
        let tmp: postItem = {
            title: post.title,
            description: post.description,
            price: post.price,
            mainImage: post.mainImage,
            category: post.category,
            featured: post.featured
        }
        this.ads.push(tmp);

        localStorage.setItem("ads", JSON.stringify(this.ads)); */
    };
    PostService.prototype.getAds = function () {
        return this.ads;
    };
    PostService.prototype.deleteItem = function (ad) {
        for (var i = 0; i < this.ads.length; i++) {
            if (this.ads[i]._id == ad._id) {
                this.ads.splice(i, 1);
                if (this.ads) {
                    localStorage.setItem("ads", JSON.stringify(this.ads));
                }
            }
        }
    };
    PostService.prototype.findById = function (id) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(_this.ads[0]);
            observer.complete();
        });
        /* this.ads.forEach(function(item){
             if (item._id = id) {
 
                 return Observable.create(observer => {
                     observer.next(item);
                     observer.complete();
                 });
                 
             }
         });*/
    };
    PostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], PostService);
    return PostService;
    var _a;
}());
exports.PostService = PostService;
