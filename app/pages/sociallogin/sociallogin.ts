import {Page, NavController, NavParams} from 'ionic-angular';
import {AuthService} from './../../services/AuthService';
import {TabsPage} from './../tabs/tabs';
import {SignUp} from './../signup/signup';
import {Facebook} from 'ionic-native';

@Page({
	templateUrl: 'build/pages/sociallogin/sociallogin.html',
  	providers: [AuthService]
})
export class SocialLogin {
	public _homePage = TabsPage;
	public _signUpPage = SignUp;
	public creds = null;
	public loginResponse = null;
	isLoggedin = false;

	constructor(private nav: NavController, private _authService: AuthService) {
		
	}

	connectFb() {

		facebookConnectPlugin.login(['email'], (response) => {
            //alert('Logged in');
            alert(JSON.stringify(response.authResponse));
            this.nav.setRoot(this._homePage);
        }, (error) => {
            alert(error);
        });
	}


    getdetails() {
        facebookConnectPlugin.getLoginStatus((response) => {
            if (response.status == "connected") {
                facebookConnectPlugin.api('/' + response.authResponse.userID + '?fields=id,name,gender', [],
					(result) => {
						this.nav.setRoot(this._homePage);
						alert(JSON.stringify(result));
					},
					(error) => {
						alert(error);
					}
                );
            }
            else {
                alert('Not logged in');
            }
        });
    }

	gotoPage(page) {
		this.nav.push(page);
	}

}


