import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';

import {SignUp} from './pages/signup/signup';
import {SignIn} from './pages/signin/signin';
import {SocialLogin} from './pages/sociallogin/sociallogin';
//com.ionicframework.rentalapp770963

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  //rootPage: any = SignUp;
  //rootPage: any = SignIn;
  rootPage: any = SocialLogin;
  
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
