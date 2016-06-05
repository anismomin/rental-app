import {Page} from 'ionic-angular';


@Page({
	templateUrl: 'build/pages/browser/browser.html',
})
export class Browser {

	//ionic plugin add cordova-plugin-inappbrowser
  constructor() {

  }

  launch(url){
	  open(url, 'system', 'location=yes');
  }
}
