import {Page, NavController, NavParams} from 'ionic-angular';
import {AuthService} from './../../services/AuthService';
import {TabsPage} from './../tabs/tabs';
import {SignUp} from './../signup/signup';

@Page({
  templateUrl: 'build/pages/signin/signin.html',
  providers: [AuthService]
})
export class SignIn {
	public _homePage = TabsPage;
	public _signUpPage = SignUp;
	public creds = null;
	public loginResponse = null;
	isLoggedin = false;

	constructor(private nav: NavController, private _authService: AuthService) {
		this.creds = {
			username: '',
			password: ''
		};
	}

	signin(creds) {
		this.nav.rootNav.setRoot(this._homePage);
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
	}

	gotoPage(page) {
		this.nav.push(page);
	}

}


