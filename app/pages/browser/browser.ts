import {Page} from 'ionic-angular';


@Page({
	templateUrl: 'build/pages/browser/browser.html',
})
export class Browser {

	//ionic plugin add cordova-plugin-inappbrowser
  constructor() {

  }

  
  system(url) {
	  // Open in external browser
	  open(url, '_system', 'location=yes');
  };

  blank(url) {
	  // Open in app browser
	  open(url, '_blank');
  };

 
}
