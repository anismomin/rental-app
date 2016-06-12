import {Page} from 'ionic-angular';
import {CameraPage} from '../camera/camera';
import {Browser} from '../browser/browser';
import {Map} from '../map/map';
import {Profile} from '../profile/profile';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
	tab1Root: any = Profile;
	tab2Root: any = CameraPage;
	tab3Root: any = Browser;
  	tab4Root: any = Map;

}
