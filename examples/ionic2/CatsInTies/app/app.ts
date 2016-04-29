import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {CatsPage} from './pages/cats/cats';
import {AboutPage} from './pages/about/about';
import {HTTP_PROVIDERS} from 'angular2/http';

@App({
  template: `
    <ion-tabs>
      <ion-tab [root]="tab1Root" tabTitle="Cats" tabIcon="grid"></ion-tab>
      <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="eye"></ion-tab>
    </ion-tabs>
  `,
  providers: [HTTP_PROVIDERS],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  tab1Root: any = CatsPage;
  tab2Root: any = AboutPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
