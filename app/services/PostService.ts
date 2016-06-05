import {Injectable} from 'angular2/core';

import { Http, Headers, Response } from 'angular2/http';

//Grab everything with import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';

export class postItem {
    _id: string;
    title: string;
    description: string;
    price: number;
    mainImage: string;
    category: string;
    featured: boolean;
}

@Injectable()
export class PostService {

    ads: Array<postItem>;
    ApiUrl = 'http://localhost:3333';    
    isLoggedin = false;
    AuthToken = null;

    constructor(public http: Http) {

        let ads = localStorage.getItem('ads');
        if (ads) {
            this.ads = JSON.parse(ads);
        } else {
            this.ads = [];
        }

    }

    useCredentials(token) {
        this.isLoggedin = true;
        this.AuthToken = token;
    }

    loadUserCredentials() {
        let token = localStorage.getItem('classified_jwt');
        this.useCredentials(token);
    }
    
    postAd(post) {
  
        this.loadUserCredentials();
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //headers.append('Authorization', 'Bearer ' +this.AuthToken);

        return this.http.post(this.ApiUrl+'/addNewPost', JSON.stringify(post), {headers: headers})
            .map(res => res.json())
            .delay(3000); 

        /*
        let tmp: postItem = {
            title: post.title,
            description: post.description,
            price: post.price,
            mainImage: post.mainImage,
            category: post.category,
            featured: post.featured
        }
        this.ads.push(tmp);

        localStorage.setItem("ads", JSON.stringify(this.ads)); */
        
    }

    getAds() {
        return this.ads;
    }


    deleteItem(ad){
        for(let i = 0; i < this.ads.length; i++) {
          if(this.ads[i]._id == ad._id){
            this.ads.splice(i, 1);
            if(this.ads) {
                localStorage.setItem("ads", JSON.stringify(this.ads));
            }
          }
        }  
    }

    findById(id) {

        return Observable.create(observer => {
            observer.next(this.ads[0]);
            observer.complete();
        });

       /* this.ads.forEach(function(item){
            if (item._id = id) {

                return Observable.create(observer => {
                    observer.next(item);
                    observer.complete();
                });
                
            }
        });*/
    }


}

