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
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/delay');
require('rxjs/add/operator/retry');
require('rxjs/add/operator/timeout');
var IUser = (function () {
    function IUser() {
    }
    return IUser;
}());
exports.IUser = IUser;
var AuthService = (function () {
    function AuthService(http, navcontroller) {
        this.http = http;
        this.navcontroller = navcontroller;
        this.ApiUrl = 'http://localhost:3333';
        this.isLoggedin = false;
        this.AuthToken = null;
    }
    AuthService.prototype.storeUserCredentials = function (token) {
        window.localStorage.setItem('classified_jwt', token);
        this.useCredentials(token);
    };
    AuthService.prototype.useCredentials = function (token) {
        this.isLoggedin = true;
        this.AuthToken = token;
    };
    AuthService.prototype.loadUserCredentials = function () {
        var token = window.localStorage.getItem('classified_jwt');
        this.useCredentials(token);
    };
    AuthService.prototype.destroyUserCredentials = function () {
        this.isLoggedin = false;
        this.AuthToken = null;
        window.localStorage.getItem('classified_jwt');
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        var headers = new http_1.Headers();
        var creds = "username=" + user.username + "&password=" + user.password;
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.ApiUrl + '/authenticate', creds, { headers: headers })
            .map(function (res) {
            _this.storeUserCredentials(res.json().token);
            return res.json();
        })
            .delay(3000);
    };
    AuthService.prototype.register = function (user) {
        var creds = "username=" + user.username + "&password=" + user.password + "&email=" + user.email;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.ApiUrl + '/adduser', creds, { headers: headers })
            .map(function (res) {
            return res.json();
        })
            .delay(3000);
    };
    AuthService.prototype.getinfo = function () {
        var headers = new http_1.Headers();
        this.loadUserCredentials();
        console.log(this.AuthToken);
        headers.append('Authorization', 'Bearer ' + this.AuthToken);
        return this.http.get(this.ApiUrl + '/getinfo', { headers: headers }).map(function (res) {
            return res.json();
        })
            .delay(3000);
    };
    AuthService.prototype.logout = function () {
        this.destroyUserCredentials();
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, ionic_angular_1.NavController])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
