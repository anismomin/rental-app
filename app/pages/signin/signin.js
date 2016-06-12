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
var AuthService_1 = require('./../../services/AuthService');
var tabs_1 = require('./../tabs/tabs');
var signup_1 = require('./../signup/signup');
var SignIn = (function () {
    function SignIn(nav, _authService) {
        this.nav = nav;
        this._authService = _authService;
        this._homePage = tabs_1.TabsPage;
        this._signUpPage = signup_1.SignUp;
        this.creds = null;
        this.loginResponse = null;
        this.isLoggedin = false;
        this.creds = {
            username: '',
            password: ''
        };
    }
    SignIn.prototype.signin = function (creds) {
        this.nav.setRoot(this._homePage);
        return;
        // this._authService.login(creds)
        // 	.subscribe(
        // 	data => {
        // 		if (data.success) {
        // 			this.loginResponse = JSON.stringify(data);
        // 			console.log(this.loginResponse);
        // 		}
        // 	},
        // 	error => console.log(error),
        // 	() => {
        // 		console.log(this.loginResponse);
        // 		this.nav.setRoot(this._homePage);
        // 	}
        // 	);
    };
    SignIn.prototype.gotoPage = function (page) {
        this.nav.push(page);
    };
    SignIn = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/signin/signin.html',
            providers: [AuthService_1.AuthService]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, AuthService_1.AuthService])
    ], SignIn);
    return SignIn;
}());
exports.SignIn = SignIn;
