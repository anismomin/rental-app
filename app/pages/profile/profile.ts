import {Page, NavController,Storage, LocalStorage} from 'ionic-angular';

import {SocialLogin} from './../sociallogin/sociallogin';
import {TabsPage} from './../tabs/tabs';

@Page({
	templateUrl: 'build/pages/profile/profile.html',
})
export class Profile {

	public _homePage = TabsPage;
	public _socialLogin = SocialLogin;
	public local: Storage = new Storage(LocalStorage);
	public profile = null;

	//ionic plugin add cordova-plugin-inappbrowser
	constructor(public nav: NavController) {
		this.local.get('ionicAuth.profile').then((data) => {
			this.profile = JSON.parse(data);
			//alert(JSON.stringify(data));
  		});
  	}

	logout() {
		facebookConnectPlugin.logout((response) => {
			//alert(JSON.stringify(response));
			this.local.remove('ionicAuth.fb_token').then(() => this.nav.rootNav.setRoot(this._socialLogin));
		});
	}
}
