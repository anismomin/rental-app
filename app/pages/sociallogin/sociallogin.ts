import {Page, NavController, NavParams, Storage, LocalStorage, Platform } from 'ionic-angular';
import {NgZone} from '@angular/core';
//import {Facebook} from 'ionic-native';

import {AuthService} from './../../services/AuthService';
import {FbProvider} from './../../services/fbAuth';
import {TabsPage} from './../tabs/tabs';
import {SignUp} from './../signup/signup';
import {SignIn} from './../signin/signin';
import {Profile} from './../profile/profile';


@Page({
	templateUrl: 'build/pages/sociallogin/sociallogin.html',
	providers: [AuthService, FbProvider]
})
export class SocialLogin {
	public _homePage = TabsPage;
	public _signUpPage = SignUp;
	public _signInPage = SignIn;
	public _profilePage = Profile;

	public local: Storage = new Storage(LocalStorage);
	

	constructor(private nav: NavController, public platform: Platform, public fb: FbProvider) {
		
		this.local.get('ionicAuth.fb_token').then((data) => {
			if (data != null) {
				//this.token = JSON.parse(data)
				this.nav.setRoot(this._homePage);
			};
		});

	}

	connectFb() {
		
		if (this.platform.is('cordova')) {
			this.fb.login().then(() => {
				this.fb.getCurrentUserProfile().then(
					(profileData) => {
						
						this.local.set('ionicAuth.profile', JSON.stringify(profileData)).then(() => {
							this.nav.rootNav.setRoot(this._homePage);	
						});
						//alert(JSON.stringify(profileData));
					}
				);
			});
		}
	}


	gotoPage(page) {
		this.nav.push(page);
	}

}


