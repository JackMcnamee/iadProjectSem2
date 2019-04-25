import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { Storage } from '@ionic/storage';
import {MenuController} from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the TechnologyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-technology',
  templateUrl: 'technology.html',
})
export class TechnologyPage {

  articles:any = [];
  newsPageTitle:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private newsProvider:NewsProvider, private storage: Storage, 
    public menuCtrl: MenuController) {
    
  }
   
  openHomePage(){
    this.navCtrl.setRoot(HomePage);
  }

  openTopHeadlinesPage(){
    this.storage.set("newsPageTitle", this.newsPageTitle);
    this.navCtrl.push('TopHeadlinesPage');
  }

  openBusinessPage(){
    this.storage.set("newsPageTitle", this.newsPageTitle);
    this.navCtrl.push('BusinessPage');
  }

  openSportsPage(){
    this.storage.set("newsPageTitle", this.newsPageTitle);
    this.navCtrl.push('SportsPage');
  }

  openTechnologyPage(){
    this.storage.set("newsPageTitle", this.newsPageTitle);
    this.navCtrl.push('TechnologyPage');
  }

  openEntertainmentPage(){
    this.storage.set("newsPageTitle", this.newsPageTitle);
    this.navCtrl.push('EntertainmentPage');
  }
   
  ionViewWillEnter() {
    this.newsProvider.getTechNews().subscribe((data)=>{
      this.articles = data.articles;
    });

    // Data Persistence
    this.storage.get("newsPageTitle")
    .then((data) =>
    {
    this.newsPageTitle = data;
    })
    .catch((err) => {
    alert("Error accesssing Storage")
    })
  }

  // menu
  ionViewDidLoad() {
    this.menuCtrl.enable(true, 'businessMenu');
  }

}
