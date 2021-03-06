import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { Storage } from '@ionic/storage';
import {MenuController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  articles:any = [];
  newsPageTitle:string;

  constructor(public navCtrl: NavController, private newsProvider:NewsProvider, private storage: Storage, public menuCtrl: MenuController) {
  
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

  ionViewWillEnter(){
    this.storage.get("newsPageTitle")
    .then((data) =>
    {
    this.newsPageTitle = data;
    })
    .catch((err) => {
    alert("Error accesssing Storage")
    })
  }

    
}
