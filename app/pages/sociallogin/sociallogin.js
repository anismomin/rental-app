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
var signin_1 = require('./../signin/signin');
var SocialLogin = (function () {
    function SocialLogin(nav, _authService) {
        this.nav = nav;
        this._authService = _authService;
        this._homePage = tabs_1.TabsPage;
        this._signUpPage = signup_1.SignUp;
        this._signInPage = signin_1.SignIn;
        this.creds = null;
        this.loginResponse = null;
        this.isLoggedin = false;
        if (window.localStorage.getItem('access_token')) {
            this.nav.setRoot(this._homePage);
        }
    }
    SocialLogin.prototype.connectFb = function () {
        var _this = this;
        facebookConnectPlugin.login(['email', 'public_profile'], function (response) {
            //alert('Logged in');
            //console.log(response.authResponse);
            window.localStorage.setItem('access_token', response.authResponse.accessToken);
            _this.getdetails();
        }, function (error) {
            alert(error);
        });
    };
    SocialLogin.prototype.getdetails = function () {
        var _this = this;
        facebookConnectPlugin.getLoginStatus(function (response) {
            if (response.status == "connected") {
                facebookConnectPlugin.api('/' + response.authResponse.userID + '?fields=id,name,gender', ['public_profile'], function (result) {
                    _this.nav.setRoot(_this._homePage);
                    //alert(JSON.stringify(result));
                }, function (error) {
                    alert(error);
                });
            }
            else {
                _this.nav.push(_this._signInPage);
            }
        });
    };
    SocialLogin.prototype.gotoPage = function (page) {
        this.nav.push(page);
    };
    SocialLogin = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/sociallogin/sociallogin.html',
            providers: [AuthService_1.AuthService]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, AuthService_1.AuthService])
    ], SocialLogin);
    return SocialLogin;
}());
exports.SocialLogin = SocialLogin;
