import {Page, Platform, Storage, LocalStorage } from 'ionic-angular';
import {Injectable} from '@angular/core';


@Injectable()
export class FbProvider {

    public local: Storage = new Storage(LocalStorage);

    constructor( public platform: Platform ) {

    }

    login() {
        let p = new Promise((resolve, reject) => {
        if(this.platform.is('cordova')) {
            facebookConnectPlugin.login([ 'email' ], (response) => {
                    this.local.set('ionicAuth.fb_token', response.authResponse.accessToken);
                    //alert(JSON.stringify(response));
                    resolve(response);
                },(err) => {
                    console.log(JSON.stringify(err));
                    reject(err);
                });
            
            } else {
                console.log("Please run me on a device");
                reject('Please run me on a device');
            }
        });
        return p;
    }
   
    getCurrentUserProfile() {
        let p = new Promise((resolve, reject) => {
            facebookConnectPlugin.api('me?fields=email,name,gender,picture,timezone', null,
            (profileData) => {
                console.log(JSON.stringify(profileData));
                resolve(profileData);
            },(err) => {
                console.log(JSON.stringify(err));
                reject(err);
            });
        });
        return p;
    }
}
