import {Page, NavController, NavParams} from 'ionic-angular';

//Services 
import {AuthService} from './../../services/AuthService';
import {TabsPage} from './../tabs/tabs';
import {SignIn} from './../signin/signin';

@Page({
  templateUrl: 'build/pages/signup/signup.html',
  providers: [AuthService]
})
export class SignUp {
	public _homePage = TabsPage;
	public _signInPage = SignIn;
	public creds = null;
	public loginResponse = null;
	isLoggedin = false;

	constructor(private nav: NavController, private _authService: AuthService) {
		this.isLoggedin = false;
		this.creds = {
			username: '',
			email: '',
			password: ''
        }
	}

	signup(creds) {

		this.nav.rootNav.setRoot(this._homePage);
		
		// this._authService.register(creds)
		// 	.subscribe(
		// 	data => {
		// 		if (data.success) {
		// 			this.loginResponse = JSON.stringify(data);
		// 			console.log(this.loginResponse);
		// 		}
		// 	},
		// 	error => console.log(error),
		// 	() => {
		// 		this.isLoggedin = true;
		// 		localStorage.setItem('classified_jwt', JSON.parse(this.loginResponse).token);
		// 		console.log(this.loginResponse);
		// 		this.nav.setRoot(this._homePage);
		// 	}
		// 	);
	}

	getSignin() {
		this.nav.pop(this._signInPage);
	}

	gotoPage(page) {
		this.nav.push(page);
	}
}

