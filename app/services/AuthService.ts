import {Injectable} from '@angular/core';
import {NavController} from 'ionic-angular';

import { Http, Headers, Response } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';

export class IUser {
    username: string;
    email: string;
    password: string;
}

@Injectable()
export class AuthService {

    
    ApiUrl = 'http://localhost:3333';    
    isLoggedin = false;
    AuthToken = null;
    
    constructor(private http: Http, private navcontroller: NavController) {

    }

     storeUserCredentials(token) {
        window.localStorage.setItem('classified_jwt', token);
        this.useCredentials(token);
    }
    
    useCredentials(token) {
        this.isLoggedin = true;
        this.AuthToken = token;
    }
    
    loadUserCredentials() {
        var token = window.localStorage.getItem('classified_jwt');
        this.useCredentials(token);
    }
    
    destroyUserCredentials() {
        this.isLoggedin = false;
        this.AuthToken = null;
        window.localStorage.getItem('classified_jwt');
    }

    login(user) {
        
        var headers = new Headers();
        var creds = "username=" + user.username + "&password=" + user.password;
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.ApiUrl+'/authenticate', creds, {headers: headers})
            .map(res => {
                this.storeUserCredentials(res.json().token);
                return res.json();
            })
            .delay(3000);            
    }

    register(user ) {
        
        var creds = "username=" + user.username + "&password=" + user.password+ "&email=" + user.email;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.ApiUrl+'/adduser', creds, {headers: headers})
            .map(res => {
                return res.json();
            })
            .delay(3000);   
    }

    getinfo() {
        var headers = new Headers();
        this.loadUserCredentials();
        console.log(this.AuthToken);

        headers.append('Authorization', 'Bearer ' +this.AuthToken);
        return this.http.get(this.ApiUrl+'/getinfo', {headers: headers}) .map(res => {
            return res.json();
        })
        .delay(3000);
        
    }
    
    logout() {
        this.destroyUserCredentials();
    }

}

