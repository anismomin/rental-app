import {Page, NavController, NavParams} from 'ionic-angular';
import {NgZone} from '@angular/core';
import {Camera} from 'ionic-native';

import {SignIn} from './../signin/signin';
import {SocialLogin} from './../sociallogin/sociallogin';

@Page({
  templateUrl: 'build/pages/camera/camera.html',
})
export class CameraPage {

    public _socialLogin = SocialLogin;
    public _signInPage = SignIn;
	public image = null;
    
    constructor(private nav: NavController, public zone: NgZone) {
		
    }

    takepic() {
        var options = {
            destinationType: 0,
            sourceType: 1,
            encodingType: 0,
            quality: 100,
            allowEdit: false,
            saveToPhotoAlbum: false
        };

        Camera.getPicture(options).then((data) => {
            var imgdata = "data:image/jpeg;base64," + data;
            this.zone.run(() => this.image = imgdata);
        }, (error) => {
            alert(error);
        });
    }

}
