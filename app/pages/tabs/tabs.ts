import {Page} from 'ionic-angular';
import {CameraPage} from '../camera/camera';
import {Browser} from '../browser/browser';
import {Map} from '../map/map';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
	tab1Root: any = CameraPage;
	tab2Root: any = Browser;
  	tab3Root: any = Map;
}
